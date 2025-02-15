import { assert } from "console";
import { fetchPosIssuancePerDay } from "../hooks/use-pos-issuance-day"; 

describe("fetchPosIssuancePerDay", () => { 
 it("test function return valid value", async () => { 
  const res = await fetchPosIssuancePerDay(); 
  assert(res > 0); 
 })
})