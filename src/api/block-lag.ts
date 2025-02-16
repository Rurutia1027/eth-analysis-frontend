import useSWR from "swr";
import * as Duration from "../constants/duration";
import { fetchJsonSwr, fetchApiJson } from "./fetchers";
import { ApiResult } from "../utils/axios-fetchers";

export type BlockLag = {
  blockLag: number;
};

const url = "/api/fees/block-lag";

// fetch data records only once via the given url
export const fetchBlockLag = (): Promise<ApiResult<BlockLag>> =>
  fetchApiJson<BlockLag>(url);

// fetch data records vis useSWR dynamically configured by refresh interval
export const useBlockLag = () => {
  //extract data field from response message from api
  const { data } = useSWR<BlockLag>(url, fetchJsonSwr, {
    refreshInterval: Duration.millisFromSeconds(1000),
  });

  return data;
};
