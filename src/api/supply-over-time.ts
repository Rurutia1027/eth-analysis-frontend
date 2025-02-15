import * as DateFns from "date-fns"; 
import { secondsToMilliseconds } from "date-fns";
import _first from "lodash/first"; 
import { useMemo } from "react";
import useSWR from "swr";
import type { Slot } from "../constants/beacon-units";
import type { EthNumber } from "../constants/eth-units";
import type { ApiResult } from "../utils/axios-fetchers";
import { A, O, OAlt, pipe, Record, RA } from "../utils/fp"; 
import type { DateTimeString } from "../constants/time";
import { MERGE_TIMESTAMP } from "../constants/paris";
import { SupplyPoint } from "../components/SupplyPoint";
import { powIssuancePerDay } from "../constants/static-ether-data";
import type { TimeFrame } from "../utils/time-frames";
import { timeFrames } from "../utils/time-frames";
import { fetchApiJson, fetchJsonSwr } from "./fetchers";

export type SupplyAtTime = {
 slot: Slot | null; 
 supply: EthNumber; 
 timestamp: DateTimeString; 
}; 
