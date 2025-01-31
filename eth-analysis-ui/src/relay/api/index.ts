import { getDomain } from "../config";

export type ApiPayload = {
  insertedAt: string;
  blockNumber: number;
  value: number;
};

export type ApiPayloadStats = {
  count: number;
  totalValue: number;
  firstPayloadAt: string;
};

export type ApiValidator = {
  insertedAt: string;
  pubkeyFragment: string;
  index: string;
};
