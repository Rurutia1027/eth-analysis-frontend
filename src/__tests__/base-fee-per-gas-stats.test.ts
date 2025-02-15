import assert from "assert";
import { fetchBaseFeePerGasStats, fetchBaseFeePerGasStatsTimeFrame } from "../api/base-fee-per-gas-stats";
import { TimeFrame } from "../utils/time-frames";


describe("fetchBaseFeePerGasStats", () => {
 it("should return data when API call successes", async () => {
  const res = await fetchBaseFeePerGasStats();
  expect(res).toBeDefined();
  assert.ok("data" in res, "Response should have 'data' property");
  assert("barrier" in res.data, "barrier should in res.data");
  assert("block_number" in res.data, "barrier should in res.data");
  assert("all" in res.data);
  assert("blob_barrier" in res.data);
  assert("d1" in res.data);
  assert("d7" in res.data);
  assert("h1" in res.data);
  assert("m5" in res.data);
  assert("since_burn" in res.data);
  assert("since_merge" in res.data);
  assert("timestamp" in res.data);
 })
}); 

describe("fetchBaseFeePerGasStatsTimeFrame", () => {
 it("fetch data with time_frame = 'd30'", async () => {
  const time_frame: TimeFrame = "d30";
  const res = await fetchBaseFeePerGasStatsTimeFrame(time_frame);
  expect(res).toBeDefined();
  assert("data" in res);
  assert("average" in res.data); 
  assert("block_number" in res.data); 
  assert("max" in res.data); 
  assert("max_block_number" in res.data); 
  assert("min" in res.data); 
  assert("min_block_number" in res.data); 
  assert("timestamp" in res.data); 
  
 });

 it("fetch data with time_frame = 'd7'", async () => {
  const time_frame: TimeFrame = "d7";
  const res = await fetchBaseFeePerGasStatsTimeFrame(time_frame);
  expect(res).toBeDefined();
  assert("data" in res);
  assert("average" in res.data); 
  assert("block_number" in res.data); 
  assert("max" in res.data); 
  assert("max_block_number" in res.data); 
  assert("min" in res.data); 
  assert("min_block_number" in res.data); 
  assert("timestamp" in res.data); 
  
 });

 it("fetch data with time_frame = 'since_merge'", async () => {
  const time_frame: TimeFrame = "since_merge";
  const res = await fetchBaseFeePerGasStatsTimeFrame(time_frame);
  expect(res).toBeDefined();
  assert("data" in res);
  assert("average" in res.data); 
  assert("block_number" in res.data); 
  assert("max" in res.data); 
  assert("max_block_number" in res.data); 
  assert("min" in res.data); 
  assert("min_block_number" in res.data); 
  assert("timestamp" in res.data); 
  
 });

 it("fetch data with time_frame = 'since_burn'", async () => {
  const time_frame: TimeFrame = "since_burn";
  const res = await fetchBaseFeePerGasStatsTimeFrame(time_frame);
  expect(res).toBeDefined();
  assert("data" in res);
  assert("average" in res.data);
  assert("block_number" in res.data);
  assert("max" in res.data);
  assert("max_block_number" in res.data);
  assert("min" in res.data);
  assert("min_block_number" in res.data);
  assert("timestamp" in res.data);
 });
}); 