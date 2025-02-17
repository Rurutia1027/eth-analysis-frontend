import { fetchBurnCategories } from "../api/burn-categories";
import assert from "assert";

describe("fetchBurnCategories", () => {
  it("resonse body should be defined and with required field 'blockLag' ", async () => {
    const res = await fetchBurnCategories();
    expect(res).toBeDefined();
    assert("data" in res, "response body should contain data field");
    // d1, d7, d30, h1,m5, since_burn, since_merge
    assert("d1" in res.data);
    expect(Array.isArray(res.data.d1)).toBe(true);
    assert("d7" in res.data);
    assert("d30" in res.data);
    assert("h1" in res.data);
    assert("m5" in res.data);
    assert("since_merge" in res.data);
    assert("since_burn" in res.data);
    // fees: 5.851613877374113e+21,
    // feesUsd: 13868079.725179207,
    // category: 'woof',
    // transactionCount: 5243817,
    // percentOfTotalBurn: 0.0030016833047103323,
    // percentOfTotalBurnUsd: 0.0031708810130514505
    assert("fees" in (res.data.d1[0] || {}));
    assert("feesUsd" in (res.data.d30[0] || {}));
    assert("category" in (res.data.h1[0] || {}));
    assert("transactionCount" in (res.data.since_burn[0] || {}));
    assert("percentOfTotalBurn" in (res.data.since_merge[0] || {}));
    assert("percentOfTotalBurnUsd" in (res.data.m5[0] || {}));
  });
});
