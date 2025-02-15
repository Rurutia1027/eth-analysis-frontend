import { EthNumber, EthUseAmount } from "../constants/eth-units"
import { DateTimeString } from "../constants/time";
import { TimeFrame } from "../utils/time-frames";
import { BlockNumber } from "./base-fee-per-gas-stats";
import { fetchApiJson, fetchJsonSwr } from "./fetchers";
import { ApiResult } from "../utils/axios-fetchers";
import useSWR from "swr";
import { secondsToMilliseconds } from "date-fns";

export type EthUsdAmount = {
 eth: EthNumber;
 usd: number;
}; 

export type GaugeRateTimeFrame = {
 block_number: BlockNumber;
 burn_rate_yearly: EthUseAmount; 
 issuance_rate_yearly: EthUsdAmount; 
 issuance_rate_yearly_pow: EthUsdAmount; 
 supply_growth_rate_yearly: number; 
 supply_growth_rate_yearly_pow: number; 
 timestamp: DateTimeString;
}; 

export type GaugeRates = Record<TimeFrame, GaugeRateTimeFrame>; 

const url = "/api/v2/fees/gauge-rates"; 

export const fetchGaugeRates = (): Promise<ApiResult<GaugeRates>> =>
 fetchApiJson<GaugeRates>(url); 

export const useGaugeRates = (): GaugeRates => {
  const { data } = useSWR<GaugeRates>(url, fetchJsonSwr, {
    refreshInterval: secondsToMilliseconds(4),
  });

  // We use an SWRConfig with fallback data for this hook.
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return data!;
};