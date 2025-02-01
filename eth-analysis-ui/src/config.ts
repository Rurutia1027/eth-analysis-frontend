type Env = "dev" | "prod" | "stag";

export const envFromEnv = (): Env => {
  const rawEnv = "dev": Env
  //process.env.NEXT_PUBLIC_ENV;

  switch (rawEnv) {
    case "prod":
      return "prod";
    case "dev":
      return "dev";
    case "staging":
      return "stag";
    default:
      console.warn("no ENV in env, defaulting to dev");
      return "dev";
  }
};

export const apiEnvFromEnv = (): Env => {
  const apiEnv = process.env.NEXT_PUBLIC_API_ENV;

  // If API_ENV is undefined, we decide based on ENV
  if (apiEnv === undefined) {
    return envFromEnv() === "dev" ? "dev" : "dev";
  }

  switch (apiEnv) {
    case "dev":
      return "dev";
    case "prod":
      return "prod";
    case "production":
      return "prod";
    case "staging":
    case "stag":
      return "stag";
    default:
      return "prod";
  }
};

export const usmDomainFromEnv = (): string => {
  const apiEnv = apiEnvFromEnv();
  switch (apiEnv) {
    case "dev":
      return "http://localhost:3000";
    // todo: modify this as vercel preview url address
    case "stag":
      return "http://localhost:3000";
    // todo: modify to this as vercel production url address
    case "prod":
      return "http://localhost:3000";
  }
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
