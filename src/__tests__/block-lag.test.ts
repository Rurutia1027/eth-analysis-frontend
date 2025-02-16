import { fetchBlockLag } from "../api/block-lag";
import assert from "assert";

describe("fetchBlockLag", () => {
  it("resonse body should be defined and with required field 'blockLag' ", async () => {
    const res = await fetchBlockLag();
    expect(res).toBeDefined();
    assert("data" in res, "response body should contain data field");
    assert("blockLag" in res.data);
  });
});
