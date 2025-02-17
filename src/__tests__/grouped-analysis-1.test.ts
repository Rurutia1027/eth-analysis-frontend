import assert from "assert";
import {
  fetchGroupedAnalysis1,
  decodeGroupedAnalysis1,
} from "../api/grouped-analysis-1";
import { GroupedAnalysis1F } from "../api/grouped-analysis-1";
import { ApiResult } from "../utils/axios-fetchers";
import { number } from "io-ts/lib/Guard";

describe("decodeGroupedAnalysis1", () => {
  it("fetch data records from api and decode the record", async () => {
    const res: ApiResult<GroupedAnalysis1F> = await fetchGroupedAnalysis1();
    assert("data" in res, "valid response body should contain data field in");
    console.log("content ", res.data);
    // first-layer fields checking
    assert("feeBurns" in res.data);
    assert("feesBurned1h" in res.data.feesBurned);

    // decode item from GroupedAnalysis1F to GroupedAnalysis1F
    const ret = decodeGroupedAnalysis1(res.data);
    expect(ret).toBeDefined();
    expect(ret?.baseFeePerGas).toBeDefined();

    assert("feesBurned7d" in res.data.feesBurned);
    assert("feesBurned7dUsd" in res.data.feesBurned);
    assert("feesBurned30d" in res.data.feesBurned);
    assert("feesBurnedSinceBurn" in res.data.feesBurned);
    assert("feesBurnedSinceMerge" in res.data.feesBurned);
    assert("feesBurnedSinceBurnUsd" in res.data.feesBurned);
    assert("feesBurnedSinceMergeUsd" in res.data.feesBurned);
  }, 12000);
});

describe("fetchGroupedAnalysis1", () => {
  it("fetch api and check return data fields", async () => {
    const res = await fetchGroupedAnalysis1();
    expect(res).toBeDefined();
    assert("data" in res, "response body should contain data field");

    // first-layer fields checking
    assert("number" in res.data);
    assert("blobBaseFee" in res.data);
    assert("baseFeePerGas" in res.data);

    assert("ethPrice" in res.data);
    assert("feeBurns" in res.data);
    assert("burnRates" in res.data);
    assert("blobFeeBurns" in res.data);
    assert("leaderboards" in res.data);
    assert("blobBurnRates" in res.data);
    assert("latestBlockFees" in res.data);
    assert("deflationaryStreak" in res.data);
    assert("deflationaryBlobStreak" in res.data);
    assert("latestBlockFeesFlipped" in res.data);
    assert("feesBurned" in res.data);
  }, 12000);
});
