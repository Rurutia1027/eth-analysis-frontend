import { renderHook } from "@testing-library/react";
import { useLocalStorage } from "../hooks/use-local-storage";

// mock the localStorage API in Jest
beforeAll(() => {
  const localStorageMock = (() => {
    let store: Record<string, string> = {};
    return {
      getItem: (key: string) => store[key] || null,
      setItem: (key: string, value: string) => {
        store[key] = value;
      },
      clear: () => {
        store = {};
      },
    };
  })();

  Object.defineProperty(window, "localStorage", {
    value: localStorageMock,
  });
});

afterEach(() => {
  // clear the localStorage mock after each test
  window.localStorage.clear();
});

describe("useLocalStorage", () => {
  it("should return intial value when localStorage is empty", () => {
    const { result } = renderHook(() => useLocalStorage("eth-threshold", 100));

    // the hook should initialize with the inital value (100)
    expect(result.current[0]).toBe(100);
  });

  it("should retrieve value from localStorage if available", () => {
    // set an item in localStorage before running the test
    window.localStorage.setItem("eth-threshold", JSON.stringify(200));
    const { result } = renderHook(() => useLocalStorage("eth-threshold", 100));

    // the hook should return the value from localStorage (200)
    expect(result.current[0]).toBe(200);
  });

  it("should handle undefined window.localStorage correctly", () => {
    // Temporarily disable localStorage for testing
    const originalLocalStorage = window.localStorage;
    Object.defineProperty(window, "localStorage", {
      value: undefined,
    });

    const { result } = renderHook(() => useLocalStorage("eth-threshold", 100));

    // The hook should still return the initial value (100)
    expect(result.current[0]).toBe(100);

    // Restore the original localStorage
    Object.defineProperty(window, "localStorage", {
      value: originalLocalStorage,
    });
  });
});
