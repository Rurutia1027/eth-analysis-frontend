import assert from "assert";
import { fetchGaugeRates } from "../api/gauge-rate";

describe('fetchGaugeRates', () => {
 it("fetch api and check return data fields", async () => {
  const res = await fetchGaugeRates(); 
  expect(res).toBeDefined(); 
  assert("data" in res, "response body should contain data field"); 
  assert("d1" in res.data); 
  assert("d30" in res.data); 
  assert("d7" in res.data); 
  assert("h1" in res.data); 
  assert("m5" in res.data); 
  assert("since_burn" in res.data);   
  assert("since_merge" in res.data); 

  // pick one and check it's inner fields 
  assert("block_number" in res.data.m5); 
  assert("burn_rate_yearly" in res.data.m5); 
  assert("issuance_rate_yearly" in res.data.m5); 
  assert("issuance_rate_yearly_pow" in res.data.m5); 
  assert("supply_growth_rate_yearly" in res.data.m5); 
  assert("supply_growth_rate_yearly_pow" in res.data.m5); 
  assert("timestamp" in res.data.m5); 
 });
}); 