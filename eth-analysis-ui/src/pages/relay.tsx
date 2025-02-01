import { minutesToSeconds } from "date-fns";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import BasicErrorBoundary from "../components/BasicErrorBoundary";
import RelayDashboards from "../relay/RelayDashboards";
import type {
  PayloadStats,
  Builder,
  Payload,
  ValidatorStats,
  Validator,
} from "../relay/types";

// Mock Data
const mockPayloadStats: PayloadStats = {
  count: 1000,
  totalValue: 50000,
  firstPayloadAt: new Date(),
};

const mockTopBuilders: Builder[] = [
  { builderName: "Builder 1", blockCount: 200 },
  { builderName: "Builder 2", blockCount: 150 },
  { builderName: "Builder 3", blockCount: 100 },
];

const mockTopPayloads: Payload[] = [
  { blockNumber: 1234, insertedAt: new Date(), value: 100 },
  { blockNumber: 5678, insertedAt: new Date(), value: 200 },
];

const mockValidatorStats: ValidatorStats = {
  validatorCount: 5,
  knownValidatorCount: 4,
};

const mockValidators: Validator[] = [
  { insertedAt: new Date(), index: "validator-1" },
  { insertedAt: new Date(), index: "validator-2" },
  { insertedAt: new Date(), index: "validator-3" },
  { insertedAt: new Date(), index: "validator-4" },
  { insertedAt: new Date(), index: "validator-5" },
];

const RelayIndexPage: NextPage = () => {
  const props = {
    payloadStats: mockPayloadStats,
    payloads: mockTopPayloads,
    topBuilders: mockTopBuilders,
    topPayloads: mockTopPayloads,
    validatorStats: mockValidatorStats,
    validators: mockValidators,
  };

  return (
    <BasicErrorBoundary>
      <Head>
        <title>Ultra Sound Relay</title>
        <meta property="og:title" content="Ultra Sound Relay" />
        <meta
          name="description"
          content="Permissionless, neutral, and censorship-free MEV relay"
        />
        <meta
          name="keywords"
          content="ultra sound relay, ethereum, ETH, MEV, MEV Boost Relay"
        />
        <meta
          property="og:description"
          content="Permissionless, neutral, and censorship-free MEV relay"
        />
        <meta property="og:url" content="https://relay.ultrasound.money" />
      </Head>
      <Script
        defer
        data-domain="relay.ultrasound.money"
        src="https://plausible.io/js/script.js"
      />
      <RelayDashboards {...props} />
    </BasicErrorBoundary>
  );
};

export default RelayIndexPage;
