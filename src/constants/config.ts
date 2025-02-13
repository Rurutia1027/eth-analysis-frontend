type Env = "dev" | "prod" | "stag";

export const envFromEnv = (): Env => {
  return "prod"; 
};

export const apiEnvFromEnv = (): Env => {
  return "prod"; 
};

export const usmDomainFromEnv = (): string => {
  return "https://ultrasound.money";
};

export const versionFromEnv = (): string => {
  const tags = process.env.NEXT_PUBLIC_TAGS;
  const commit = process.env.NEXT_PUBLIC_COMMIT;

  const shortTagVersion =
    typeof tags !== "string" ? undefined : tags.split("-")[1];
  const shortCommitVersion =
    typeof commit !== "string" ? undefined : commit.slice(0, 7);

  if (shortTagVersion && shortCommitVersion) {
    return `${shortTagVersion}-${shortCommitVersion}`;
  }

  if (shortTagVersion) {
    return shortTagVersion;
  }

  if (shortCommitVersion) {
    return shortCommitVersion;
  }

  return "unknown";
};
