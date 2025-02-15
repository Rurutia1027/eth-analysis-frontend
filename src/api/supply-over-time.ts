import * as DateFns from "date-fns"; 
import { secondsToMilliseconds } from "date-fns";
import _first from "lodash/first"; 
import { useMemo } from "react";
import useSWR from "swr";
import type { Slot } from "../constants/beacon-units";
import type { EthNumber } from "../constants/eth-units";
import type { ApiResult } from "../utils/axios-fetchers";
import { A, O, OAlt, pipe, Record, RA } from "../utils/fp"; 
import { BITCOIN_HALVENING_SECONDS_AFTER_MERGE, BITCOIN_ISSUANCE_PER_SECOND, BITCOIN_ISSUANCE_PER_SECOND_AFTER_HALVENING, BITCOIN_SUPPLY_AT_MERGE, DateTimeString, SLOTS_PER_DAY } from "../constants/time";
import { MERGE_TIMESTAMP } from "../constants/paris";
import { SupplyPoint } from "../components/SupplyPoint";
import { powIssuancePerDay } from "../constants/static-ether-data";
import type { TimeFrame } from "../utils/time-frames";
import { timeFrames } from "../utils/time-frames";
import { fetchApiJson, fetchJsonSwr } from "./fetchers";
import { BlockNumber } from "./base-fee-per-gas-stats";
import { usePosIssuancePerDay } from "../hooks/use-pos-issuance-day";

export type SupplyAtTime = {
 slot: Slot | null; 
 supply: EthNumber; 
 timestamp: DateTimeString; 
}; 

export type SupplyOverTime = {
 block_number: BlockNumber; 
 d1: SupplyAtTime[]; 
 d30: SupplyAtTime[]; 
 d7: SupplyAtTime[]; 
 h1: SupplyAtTime[]; 
 m5: SupplyAtTime[]; 
 since_merge: SupplyAtTime[]; 
 since_burn: SupplyAtTime[]; 
 slot: Slot; 
 timestamp: DateTimeString; 
}; 

const url = "/api/v2/fees/supply-over-time"; 

export const fetchSupplyOverTime = (): Promise<ApiResult<SupplyOverTime>> =>
 fetchApiJson<SupplyOverTime>(url); 

export const useSupplyOverTime = (): SupplyOverTime | undefined =>
 useSWR<SupplyOverTime>(url, fetchJsonSwr, {
  // increase refresh interval here to decrease backend API request pressure
  refreshInterval: secondsToMilliseconds(1000),
 }).data; 

const calculateBitcoinIssuedSinceMerge = function (startTime: number, secondsDelat: number) { 
 let result; 
 if (startTime + secondsDelat < BITCOIN_HALVENING_SECONDS_AFTER_MERGE) {
  // time frame ends before halfening - same logic as before 
  result = secondsDelat * BITCOIN_ISSUANCE_PER_SECOND;
 } else if (startTime > BITCOIN_HALVENING_SECONDS_AFTER_MERGE) {
  // time frame begins after halfening just change issuance rate 
  result = secondsDelat * BITCOIN_ISSUANCE_PER_SECOND_AFTER_HALVENING;
 } else { 
  // time frame stretches across halfening, calculate issuance before and after halfening and add up 
  result =
   (BITCOIN_HALVENING_SECONDS_AFTER_MERGE - startTime) * BITCOIN_ISSUANCE_PER_SECOND +
   (secondsDelat + startTime - BITCOIN_HALVENING_SECONDS_AFTER_MERGE) *
   BITCOIN_ISSUANCE_PER_SECOND_AFTER_HALVENING;   
 }
 return result;
}

const btcSeriesFromPos = (ethPosSeries: SupplyPoint[],): [SupplyPoint[], SupplyPoint[]] => {
 const ethPosFirstPoint = pipe(
  ethPosSeries,
  A.head,
  OAlt.expect("ethPosSeries should have at least one point"),
 );

 const pairsToTimeFrameSeconds = DateFns.differenceInSeconds(
  ethPosFirstPoint[0], MERGE_TIMESTAMP);

 const firstPointBitcoinSupply = BITCOIN_SUPPLY_AT_MERGE + calculateBitcoinIssuedSinceMerge(0, pairsToTimeFrameSeconds);

 const points = ethPosSeries.map(([timestamp]) => {
  const secondsDelta = ethPosFirstPoint[0] === undefined
   ? 0
   : DateFns.differenceInSeconds(timestamp, ethPosFirstPoint[0]);
  const bitcoinIssued = calculateBitcoinIssuedSinceMerge(pairsToTimeFrameSeconds, secondsDelta);
  const nextPoint = [
   timestamp,
   firstPointBitcoinSupply + bitcoinIssued,
  ] as SupplyPoint;
  return nextPoint;
 });

 const scalingConstant = ethPosFirstPoint[1] / firstPointBitcoinSupply;
 const pointScaled = points.map(([timestamp, bitcoinSupply]) => {
  return [timestamp, bitcoinSupply * scalingConstant] as SupplyPoint;
 });

 return [points, pointScaled];
}; 

const powSeriesFromPos = (ethPosSeries: SupplyPoint[],
 powMinPosIssuancePerDay: EthNumber,
 timeFrame: TimeFrame, 
): SupplyPoint[] =>  
 pipe(
  ethPosSeries,
  // only remain the records in ethPosSeries with timestamp >= MERGE_TIMESTAMP
  A.filter(([timestamp]) => new Date(timestamp) >= MERGE_TIMESTAMP),
  A.map(([timestamp, supply]) => {
   const firstPoint = _first(ethPosSeries);
   const firstPointTimestamp = new Date(firstPoint![0]);
   const slotsSinceStart =
    DateFns.differenceInSeconds(new Date(timestamp), firstPointTimestamp) / 12;
   const slotSinceMerge =
    DateFns.differenceInSeconds(new Date(timestamp), MERGE_TIMESTAMP);
   
   const slotCount = timeFrame === "since_burn" ? slotSinceMerge : slotsSinceStart;
   
   const simulatedPowIssuanceSinceStart =
    (slotCount / SLOTS_PER_DAY) * powMinPosIssuancePerDay;
   
   const nextSupply = supply + simulatedPowIssuanceSinceStart;
   const nextPoint: SupplyPoint = [timestamp, nextSupply];
   return nextPoint;
  }), 
 ); 
 

const supplyPointFromSupplyAtTime = (supplyAtTime: SupplyAtTime): SupplyPoint =>
 [
  new Date(supplyAtTime.timestamp).getTime(),
  supplyAtTime.supply,
 ] as SupplyPoint; 

export type SupplySeriesCollection = {
 btcSeries: SupplyPoint[]; 
 btcSeriesScaled: SupplyPoint[]; 
 posSeries: SupplyPoint[]; 
 powSeries: SupplyPoint[]; 
 timestamp: DateTimeString; 
}; 

export type SupplySeriesCollections = Record<TimeFrame, SupplySeriesCollection>; 

// we use four series to show supply over time. three of which are derivaties 
// of the first one. As the response is currently rather large, containing an update for all time frames
// every block , even though 99% of the data is the same. 
// we derive the other series from the first 
export const useSupplySeriesCollections = (): O.Option<SupplySeriesCollections> => { 
 const supplyOverTimePerTimeFrame = useSupplyOverTime(); 
 const posIssuancePerDay = usePosIssuancePerDay(); 
 const powMinPosIssuancePerDay = powIssuancePerDay - posIssuancePerDay; 
 return useMemo(
      () =>
        pipe(
          supplyOverTimePerTimeFrame,
          O.fromNullable,
          O.map((supplyOverTimePerTimeFrame) =>
            pipe(
              // If only supply over time was a proper hashmap, we wouldn't need a complex zip here.
              timeFrames,
              RA.toArray,
              A.map(
                (timeFrame) =>
                  [timeFrame, supplyOverTimePerTimeFrame[timeFrame]] as const,
              ),
              A.map(([timeFrame, supplyOverTime]) => {
                const posSeries = pipe(
                  supplyOverTime,
                  A.map(supplyPointFromSupplyAtTime),
                );
                const powSeries = powSeriesFromPos(
                  posSeries,
                  powMinPosIssuancePerDay,
                  timeFrame,
                );
                const [btcSeries, btcSeriesScaled] =
                  btcSeriesFromPos(posSeries);
                return [
                  timeFrame,
                  {
                    btcSeries,
                    btcSeriesScaled,
                    posSeries,
                    powSeries,
                    timestamp: supplyOverTimePerTimeFrame.timestamp,
                  },
                ] as [TimeFrame, SupplySeriesCollection];
              }),
              (entries) =>
                Record.fromEntries(entries) as SupplySeriesCollections,
            ),
          ),
        ),
      [powMinPosIssuancePerDay, supplyOverTimePerTimeFrame],
    );
  };
