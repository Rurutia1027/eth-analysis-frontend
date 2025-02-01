import React from "react";
import Script from "next/script";
import RelayIndexPage from "./relay"; // Ensure this points to the correct file

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to eth-analysis-ui</h1>
      <RelayIndexPage
        payloadStats={{
          count: 1000,
          totalValue: 50000,
          firstPayloadAt: new Date(),
        }}
        payloads={[
          { blockNumber: 1234, insertedAt: new Date(), value: 100 },
          { blockNumber: 5678, insertedAt: new Date(), value: 200 },
        ]}
        topBuilders={[
          { builderName: "Builder 1", blockCount: 200 },
          { builderName: "Builder 2", blockCount: 150 },
          { builderName: "Builder 3", blockCount: 100 },
        ]}
        topPayloads={[
          { blockNumber: 1234, insertedAt: new Date(), value: 100 },
          { blockNumber: 5678, insertedAt: new Date(), value: 200 },
        ]}
        validatorStats={{ validatorCount: 5, knownValidatorCount: 4 }}
        validators={[
          { insertedAt: new Date(), index: "validator-1" },
          { insertedAt: new Date(), index: "validator-2" },
          { insertedAt: new Date(), index: "validator-3" },
          { insertedAt: new Date(), index: "validator-4" },
          { insertedAt: new Date(), index: "validator-5" },
        ]}
      />
    </div>
  );
};

export default Home;
