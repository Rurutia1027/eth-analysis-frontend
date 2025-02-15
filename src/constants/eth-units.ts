import JSBI from "jsbi";

// export const WEI_PER_GWEI_JSBI = JSBI.exponentiate(
//   JSBI.BigInt(10),
//   JSBI.BigInt(9),
// );

export const WEI_PER_ETH = 1e18;
export const WEI_PER_GWEI = 1e9;
export const GWEI_PER_ETH = 1e9;
export type Gwei = number;
export type Eth = number;

export type WeiString = string;
export type WeiJSBI = JSBI;

export type GweiString = string;
export type GweiJSBI = JSBI;

export type WeiNumber = number;
export type GweiNumber = number;
export type EthNumber = number;

export type EthUseAmount = {
  eth: EthNumber;
  usd: number;
};


export const GWEI_FORMATTING_THRESHOLD = 1e15; // Threshold in wei below which to convert format as Gwei instead of ETH
export const MIN_BURN_DECIMALS = 2;
export const BURN_USD_DECIMALS = 0;