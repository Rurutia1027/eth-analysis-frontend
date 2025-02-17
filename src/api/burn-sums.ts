import { secondsToMilliseconds } from "date-fns";
import useSWR from "swr";
import type { DateTimeString } from "../constants/time";
import type { ApiResult } from "../utils/axios-fetchers";
import { fetchApiJson, fetchJsonSwr } from "./fetchers";
import type { TimeFrame } from "../utils/time-frames";
import { ApiError } from "../utils/axios-fetchers";

export type BurnSum = {
  block_number: number;
  sum: {
    eth: number;
    usd: number;
  };
  timestamp: DateTimeString;
};

export type BurnSums = Record<TimeFrame, BurnSum>;

// TODO: this api endpint is unavailable ...
// so i have to mock the datasets by myself,
// after I finish backend and deploy it properly, I gonna replace the
// ultra money backend points to ourselves instead.
const url = "/api/v2/fees/burn-sums";

export const fetchBurnSums = (): BurnSums => {
  return {
    m5: {
      block_number: 1005000,
      sum: { eth: 10.5, usd: 850.25 },
      timestamp: "2024-02-16T12:05:00Z",
    },
    h1: {
      block_number: 1004500,
      sum: { eth: 55.3, usd: 4500.75 },
      timestamp: "2024-02-16T11:00:00Z",
    },
    d1: {
      block_number: 1000000,
      sum: { eth: 123.45, usd: 9876.54 },
      timestamp: "2024-02-16T12:00:00Z",
    },
    d7: {
      block_number: 999000,
      sum: { eth: 789.12, usd: 54321.67 },
      timestamp: "2024-02-10T12:00:00Z",
    },
    d30: {
      block_number: 950000,
      sum: { eth: 456.78, usd: 32109.87 },
      timestamp: "2024-01-17T12:00:00Z",
    },
    since_merge: {
      block_number: 500000,
      sum: { eth: 1500, usd: 110000 },
      timestamp: "2022-09-15T00:00:00Z",
    },
    since_burn: {
      block_number: 600000,
      sum: { eth: 2000, usd: 150000 },
      timestamp: "2021-08-05T00:00:00Z",
    },
  };
};

// fetchApiJson<BurnSums>(url);

export const useBurnSums = (): BurnSums => {
  const { data } = useSWR<BurnSums>(url, fetchJsonSwr, {
    refreshInterval: secondsToMilliseconds(4),
  });

  // We use an SWRConfig with fallback data for this hook.
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return data!;
};
