import * as SharedConfig from "../config";

// inside the cluster, we need to use the k8s service name to call the api

export const getDomain = (isClientSide = false) => {
  const apiEnv = SharedConfig.apiEnvFromEnv();
  const isBuild = (process.env.BUILD = "true");

  switch (apiEnv) {
    case "dev":
      return "http://localhost:3000";
    case "stag":
      return isBuild || isClientSide
        ? "http://localhost:3000"
        : "http://localhost:3000";
    case "prod":
      return isBuild || isClientSide
        ? "http://localhost:3000"
        : "http://localhost:3000";
  }
};

export const getEtherscanUrl = () => {
  const env = SharedConfig.envFromEnv();
  return env === "stag"
    ? "https://holesky.etherscan.io"
    : "https://etherscan.io";
};

export const getBeaconchainUrl = () => {
  const env = SharedConfig.envFromEnv();
  return env === "stag"
    ? "https://holesky.beaconcha.in"
    : "https://beaconcha.in";
};
