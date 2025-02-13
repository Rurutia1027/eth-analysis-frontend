import { renderHook, waitFor } from "@testing-library/react";
import useSWR from "swr";
import { fetchBaseFeeOverTime, useBaseFeeOverTime } from "../api/base-fee-over-time";
import { fetchApiJson } from "../utils/axios-fetchers";
import type { BaseFeeOverTime } from "../api/base-fee-over-time";
import type { ApiResult } from "../utils/axios-fetchers";
import exp from "constants";
import { assert } from "console";
import { result } from "lodash";
import { fetchJsonSwr } from "../api/fetchers";

describe("fetchBaseFeeOverTime", () => {
 it("should return data when API call succeeds", async () => {
  const res = await fetchBaseFeeOverTime();
  expect(res).toBeDefined();
  if ("data" in res) {
   // d1, d30, d7, h1, m5, since_burn, since_merge
   expect(res.data).toHaveProperty("barrier");
   expect(res.data).toHaveProperty("blob_barrier");
   expect(res.data).toHaveProperty("block_number");
   expect(res.data).toHaveProperty("d1");
   expect(res.data).toHaveProperty("d30");
   expect(res.data).toHaveProperty("d7");
   expect(res.data).toHaveProperty("h1");
   expect(res.data).toHaveProperty("m5");
   expect(res.data).toHaveProperty("since_burn");
   expect(res.data).toHaveProperty("since_merge");
   assert("d1" in res.data)
      expect(Array.isArray(res.data.d1)).toBe(true)
  
   assert("d30" in res.data);
   expect(Array.isArray(res.data.d30)).toBe(true)

   assert("d7" in res.data);
   expect(Array.isArray(res.data.d7)).toBe(true);
   

   assert("h1" in res.data);
   expect(Array.isArray(res.data.h1)).toBe(true);
   

   assert("m5" in res.data);
   expect(Array.isArray(res.data.m5)).toBe(true);
   

   assert("since_burn" in res.data);
   expect(Array.isArray(res.data.since_burn)).toBe(true);
   

   assert("since_merge" in res.data);
   expect(Array.isArray(res.data.since_merge)).toBe(true);
 
  }
 });
}); 



jest.mock('../api/base-fee-over-time', () => ({
  fetchBaseFeeOverTime: jest.fn().mockResolvedValue({
    data: {
      barrier: 'some-value',
      blob_barrier: 'some-value',
      block_number: 12345,
      d1: [],
      d30: [],
      d7: [],
      h1: [],
      m5: [],
      since_burn: [],
      since_merge: [],
    }
  })
}));