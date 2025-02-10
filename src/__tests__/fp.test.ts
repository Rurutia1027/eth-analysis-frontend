import { EAlt, OAlt, TEAlt, sum } from "../utils/fp";
import * as E from "fp-ts/lib/Either";
import * as O from "fp-ts/lib/Option";
import * as T from "fp-ts/lib/Task";

describe("FP Utilities", () => {
  describe("sum", () => {
    it("should return the sum of two numbers", () => {
      expect(sum(1, 1)).toBe(2);
      expect(sum(-1, 1)).toBe(0);
    });
  });

  describe("unwrap (Either)", () => {
    it("should return the value if Either is Right", () => {
      const result = EAlt.unwrap(E.right("Success"));
      expect(result).toBe("Success");
    });

    it("should thrown an error if the Either is Left with an Error", () => {
      expect(() => EAlt.unwrap(E.left(new Error("Test Error")))).toThrowError(
        "Test Error",
      );
    });

    it("should throw an error if the Either is Left with a string", () => {
      expect(() => EAlt.unwrap(E.left("Error message"))).toThrowError(
        "Error message",
      );
    });

    it("should throw an error if the Either is Left with an ErrorLike object", () => {
      const errorLike = { error: new Error("Error from ErrorLike") };
      expect(() => EAlt.unwrap(E.left(errorLike))).toThrowError(
        "Error from ErrorLike",
      );
    });
  });

  describe("OAlt.expect", () => {
    it("should return the value if the Option is Some", () => {
      const result = OAlt.expect("Value not found")(O.some("Value"));
      expect(result).toBe("Value");
    });

    it("should throw an error with the provided message if the Option is None", () => {
      expect(() => OAlt.expect("Value not found")(O.none)).toThrowError(
        "Value not found",
      );
    });
  });

  describe("OAlt.unwrap", () => {
    it("should return the value if the Option is Some", () => {
      const result = OAlt.unwrap(O.some("Value"));
      expect(result).toBe("Value");
    });

    it("should throw an error if the Option is None", () => {
      expect(() => OAlt.unwrap(O.none)).toThrowError("unwrap on none");
    });
  });
});
