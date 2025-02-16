import type { CategoryId } from "./burn-categories";
import type { Linkables } from "./profiles";
import { TimeFrame } from "../utils/time-frames";

type ContractEntry = {
  address: string;
  category: CategoryId | string | null | undefined;
  detail: string | null | undefined;
  famFollowerCount: number | undefined;
  fees: number;
  feesUsd: number;
  followerCount: number | undefined;
  image: string | null | undefined;
  isBot: boolean;
  name: string | null | undefined;
  twitterBio: string | undefined;
  twitterHandle: string | undefined;
  twitterLinks: Linkables | undefined;
  twitterName: string | undefined;
  twitterUrl: string | undefined;
  type: "contract";
  /**
   * @deprecated
   */
  id: string;
};

type EthTransfersEntry = {
  type: "eth-transfers";
  name: string;
  fees: number;
  feesUsd: number;
  /**
   * @deprecated
   */
  id: string;
};

type ContractCreationsEntry = {
  type: "contract-creations";
  name: string;
  fees: number;
  feesUsd: number;
  /**
   * @deprecated
   */
  id: string;
};

type BlobFeesEntry = {
  type: "blob-fees";
  name: string;
  fees: number;
  feesUsd: number;
  /**
   * @deprecated
   */
  id: string;
};

// Name is undefined because we don't always know the name for a contract. Image is undefined because we don't always have an image for a contract. Address is undefined because base fees paid for ETH transfers are shared between many addresses.
export type LeaderboardEntry =
  | ContractEntry
  | EthTransfersEntry
  | BlobFeesEntry
  | ContractCreationsEntry;

export type Leaderboards = {
  leaderboard5m: LeaderboardEntry[];
  leaderboard1h: LeaderboardEntry[];
  leaderboard24h: LeaderboardEntry[];
  leaderboard7d: LeaderboardEntry[];
  leaderboard30d: LeaderboardEntry[];
  leaderboardSinceMerge: LeaderboardEntry[];
  leaderboardSinceBurn: LeaderboardEntry[];
};

export const leaderboardKeyFromTimeFrame: Record<
  TimeFrame,
  keyof Leaderboards
> = {
  m5: "leaderboard5m",
  h1: "leaderboard1h",
  d1: "leaderboard24h",
  d7: "leaderboard7d",
  d30: "leaderboard30d",
  since_merge: "leaderboardSinceMerge",
  since_burn: "leaderboardSinceBurn",
};
