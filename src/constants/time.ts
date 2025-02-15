export type DateTimeString = string;
export type JsTimestamp = number;
export const DAYS_PER_YEAR = 365.25;

import * as DateFns from "date-fns";

export const GENESIS_TIMESTAMP: Date = DateFns.fromUnixTime(1606824023);

export const dateTimeFromSlot = (slot: number): Date =>
  DateFns.addSeconds(GENESIS_TIMESTAMP, slot * 12);

export const SECONDS_PER_SLOT = 12;
export const SECONDS_PER_MINUTE = 60;
export const MINUTES_PER_HOUR = 60;
export const HOURS_PER_DAY = 24;

export const SLOTS_PER_MINUTE = SECONDS_PER_MINUTE / SECONDS_PER_SLOT;
export const SLOTS_PER_DAY =
  HOURS_PER_DAY * MINUTES_PER_HOUR * SLOTS_PER_MINUTE;

export const BITCOIN_SUPPLY_AT_MERGE = 19_152_350;
export const BITCOIN_ISSUANCE_PER_TEN_MINUTES = 6.25;
export const BITCOIN_ISSUANCE_PER_SECOND =
  BITCOIN_ISSUANCE_PER_TEN_MINUTES / (60 * 10);
export const BITCOIN_HALVENING_SECONDS_AFTER_MERGE = 50347588; // Based on Halvening bitcoin block time of 2024-04-20T00:09:27
export const BITCOIN_ISSUANCE_PER_SECOND_AFTER_HALVENING =
  BITCOIN_ISSUANCE_PER_SECOND / 2;

