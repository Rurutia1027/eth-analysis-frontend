import useSWR from "swr";
import { TimeFrame } from "../utils/time-frames"; 
import { fetchApiJson, fetchJsonSwr } from "./fetchers";
import { ApiResult } from "../utils/axios-fetchers";
import { GweiNumber, WeiNumber } from "../constants/eth-units";
import type { DateTimeString } from "../constants/time";
import { secondsToMilliseconds, minutesToMilliseconds,hoursToMilliseconds } from "date-fns";

export type BlockNumber = number;

export type BaseFeePerGasStats = {
 average: WeiNumber; 
 max_block_number: number; 
 max: WeiNumber; 
 min: WeiNumber; 
 min_block_number: number; 
}; 

export type BaseFeePerGasStatsEnvelope = {
 barrier: GweiNumber; 
 base_fee_per_gas_stats: Record<TimeFrame, BaseFeePerGasStats>; 
 block_number: BlockNumber; 
 timestamp: DateTimeString; 
}; 

export type BlobBaseFeeStatsEnvelope = {
 barrier: GweiNumber; 
 blob_base_fee_stats: Record<TimeFrame, BaseFeePerGasStats>; 
 block_number: BlockNumber; 
 timestamp: DateTimeString; 
}; 

const url = "/api/v2/fees/base-fee-per-gas-stats"; 
const blob_url = "/api/v2/fees/blob-fee-per-gas-stats"; 

export const fetchBaseFeePerGasStats = (): Promise<
  ApiResult<BaseFeePerGasStatsEnvelope>
> => fetchApiJson<BaseFeePerGasStatsEnvelope>(url);


export const useBlobBaseFeeStats = ():
 | BlobBaseFeeStatsEnvelope
 | undefined => { 
 const { data } = useSWR<BlobBaseFeeStatsEnvelope>(blob_url, fetchJsonSwr, {
  refreshInterval: secondsToMilliseconds(1000), 
 }); 
 return data; 
 }

export const fetchBaseFeePerGasStatsTimeFrame =
 (timeFrame: TimeFrame): Promise<ApiResult<BaseFeePerGasStats>> =>
  fetchApiJson<BaseFeePerGasStats>(`${url}?time_frame=${timeFrame}`); 
 
 const refreshIntervalMap: Record<TimeFrame, number> = {
  m5: secondsToMilliseconds(4),
  h1: secondsToMilliseconds(4),
  d1: minutesToMilliseconds(1),
  d7: minutesToMilliseconds(10),
  d30: hoursToMilliseconds(1),
  since_burn: hoursToMilliseconds(1),
  since_merge: hoursToMilliseconds(1),
};

export const useBaseFeePerGasStatsTimeFrame = (
  timeFrame: TimeFrame,
  blobFees = false,
): BaseFeePerGasStats => {
    const fullUrl = `${blobFees ? blob_url : url}?time_frame=${timeFrame}`;
    if(blobFees) {
    console.log("Requesting blob fees over time:", fullUrl);
    }
  const { data } = useSWR<BaseFeePerGasStats>(
    fullUrl,
    fetchJsonSwr,
    {
      refreshInterval: refreshIntervalMap[timeFrame],
    },
  );

  // We use an SWRConfig with fallback data for this hook.
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return data!;
};