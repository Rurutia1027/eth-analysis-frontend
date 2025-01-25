import {
  fetchApiJson,
  absoluteUrlFromUrl,
  ApiError,
  FetchError,
} from "../fetchers";

global.fetch = jest.fn();

describe("abstoluteUrlFromUrl", () => {
  it("should return the absolute URL if the input is a relative URL", () => {
    const result = absoluteUrlFromUrl("https://example.com", "/api/data");
    expect(result).toBe("https://example.com/api/data");
  });

  it("should return the same URL if the input is already absolute", () => {
    const result = absoluteUrlFromUrl(
      "https://example.com",
      "https://api.example.com/data",
    );
    expect(result).toBe("https://api.example.com/data");
  });
});
