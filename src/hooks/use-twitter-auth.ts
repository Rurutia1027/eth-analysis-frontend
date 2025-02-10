export type TwitterAuthStatus =
  | { type: "access-denied" }
  | {
      type: "authenticated";
      id: string;
      handle: string;
      eligibleForPoap: boolean;
      claimedPoap: boolean;
    }
  | { type: "authenticating" }
  | { type: "checking" }
  | { type: "error"; message: string }
  | { type: "init" }
  | { type: "signing-out" };
