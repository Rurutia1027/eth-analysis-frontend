import useSWR from "swr";
import * as Duration from "../constants/duration";
import type { WeiNumber } from "../constants/eth-units";
import { fetchApiJson, fetchJsonSwr } from "./fetchers";
import type { Leaderboards } from "./leaderboards";
import { decodeBurnRecords } from "./burn-records";
import type { BurnRecords, BurnRecordsF } from "./burn-records";
import { ApiResult } from "../utils/axios-fetchers";

type WeiPerMinute = number;

export type BurnRates = {
  burnRate5m: WeiPerMinute;
  burnRate5mUsd: number;
  burnRate1h: WeiPerMinute;
  burnRate1hUsd: number;
  burnRate24h: WeiPerMinute;
  burnRate24hUsd: number;
  burnRate30d: WeiPerMinute;
  burnRate30dUsd: number;
  burnRate7d: WeiPerMinute;
  burnRate7dUsd: number;
  burnRateSinceMerge: WeiPerMinute;
  burnRateSinceMergeUsd: number;
  burnRateSinceBurn: WeiPerMinute;
  burnRateSinceBurnUsd: number;
};

export type FeesBurned = {
  feesBurned5m: WeiNumber;
  feesBurned5mUsd: number;
  feesBurned1h: WeiNumber;
  feesBurned1hUsd: number;
  feesBurned24h: WeiNumber;
  feesBurned24hUsd: number;
  feesBurned7d: WeiNumber;
  feesBurned7dUsd: number;
  feesBurned30d: WeiNumber;
  feesBurned30dUsd: number;
  feesBurnedSinceMerge: WeiNumber;
  feesBurnedSinceMergeUsd: number;
  feesBurnedSinceBurn: WeiNumber;
  feesBurnedSinceBurnUsd: number;
};

export type LatestBlock = {
  fees: WeiNumber;
  feesUsd: number;
  number: number;
  baseFeePerGas: WeiNumber;
  minedAt: string;
};

export type EthPrice = {
  usd: number;
  usd24hChange: number;
};

export type DeflationaryStreakMode = "preMerge" | "postMerge";

export type DeflationaryStreak = {
  startedOn: string;
  count: number;
};

export type DeflationaryStreakState = Record<
  DeflationaryStreakMode,
  DeflationaryStreak | null
>;

export type GroupedAnalysis1 = {
  baseFeePerGas: number;
  burnRates: BurnRates;
  burnRecords: BurnRecords["records"];
  deflationaryStreak: DeflationaryStreakState;
  deflationaryBlobStreak: DeflationaryStreakState;
  ethPrice: EthPrice | undefined;
  feesBurned: FeesBurned;
  blobFeeBurns: FeesBurned;
  /** latest first */
  latestBlockFees: LatestBlock[];
  /** latest last */
  latestBlockFeesFlipped: LatestBlock[];
  leaderboards: Leaderboards;
  number: number;
};

export type GroupedAnalysis1F = {
  baseFeePerGas: number;
  burnRates: BurnRates;
  burnRecords: BurnRecordsF["records"];
  deflationaryStreak: DeflationaryStreakState;
  deflationaryBlobStreak: DeflationaryStreakState;
  ethPrice: EthPrice | undefined;
  feesBurned: FeesBurned;
  blobFeeBurns: FeesBurned;
  latestBlockFees: LatestBlock[];
  latestBlockFeesFlipped: LatestBlock[];
  leaderboards: Leaderboards;
  number: number;
};

export const decodeGroupedAnalysis1 = (
  raw: GroupedAnalysis1F | undefined,
): GroupedAnalysis1 | undefined =>
  raw === undefined
    ? undefined
    : {
        ...raw,
        burnRecords: decodeBurnRecords({
          number: raw.number,
          records: raw.burnRecords,
        }).records,
      };

const url = "/api/fees/grouped-analysis-1";
export const useGroupedAnalysis1 = (): GroupedAnalysis1F | undefined => {
  const { data } = useSWR<GroupedAnalysis1F>(url, fetchJsonSwr, {
    refreshInterval: Duration.millisFromSeconds(1000),
  });
  return data;
};

export const fetchGroupedAnalysis1 = (): Promise<
  ApiResult<GroupedAnalysis1F>
> => fetchApiJson<GroupedAnalysis1F>(url);
