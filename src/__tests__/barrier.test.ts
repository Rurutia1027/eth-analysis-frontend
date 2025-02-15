import assert from "assert";
import { fetchBaseFeePerGasBarrier } from "../api/barrier";

describe("fetchBaseFeePerGasBarrier", () => { 
 it("should return data when API call successes", async () => {
  const res = await fetchBaseFeePerGasBarrier(); 
  expect(res).toBeDefined(); 
  assert("data" in res, "response body should contain data field"); 
  assert("barrier" in res.data); 
  assert("blob_barrier" in res.data); 
  assert("block_number" in res.data); 
  assert("timestamp" in res.data); 
 }); 
})