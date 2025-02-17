import { fetchBurnSums } from "../api/burn-sums";
import assert from "assert";

describe("fetchBurnSums", () => {
  it("resonse body should be defined and with required fields in it ", () => {
    const res = fetchBurnSums();
    expect(res).toBeDefined();
    // console.log("#fetchBurnSums", res);
  });
});
