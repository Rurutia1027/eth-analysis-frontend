import React from "react";
import { render } from "@testing-library/react";
import { sum } from "../fp";

describe("Test Component", () => {
  test("test sum", () => {
    expect(sum(1, 1)).toBe(2);
  });
});
