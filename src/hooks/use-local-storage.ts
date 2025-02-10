import { useState } from "react";

export type LocalStorageKey =
  | "auth-from-section"
  | "eth-alarm-enabled"
  | "eth-threshold"
  | "eth-threshold-type"
  | "gas-alarm-enabled"
  | "gas-threshold"
  | "gas-threshold-type";

export const useLocalStorage = <T>(key: LocalStorageKey, initialValue: T) => {
  // state to store our value
  // pass initial state function to useState to logic is only executed once
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      // get from local storage by key
      const item = window.localStorage.getItem(key);
      // parse stored json or if none return intialValue
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      // if error also return intialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that
  // persists the new value to localStorage.
  const setValue = (value: T | ((val: T) => T)) => {
    if (typeof window === "undefined") {
      return undefined;
    }

    try {
      // allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // save state
      setStoredValue(valueToStore);
      // save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // a more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
};
