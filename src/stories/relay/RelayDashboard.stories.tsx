// src/stories/RelayDashboard.stories.tsx

import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import RelayDashboard, {
  RelayDashboardProps,
} from "../../relay/RelayDashboards";
import { Payload, PayloadStats } from "../../relay/types";

// Mock Data for the props

const mockPayloadStats: PayloadStats = {
  count: 1000,
  totalValue: 50000,
  firstPayloadAt: new Date(),
};

const mockTopBuilders = [
  { builderName: "Builder 1", blockCount: 200 },
  { builderName: "Builder 2", blockCount: 150 },
  { builderName: "Builder 3", blockCount: 100 },
];

const mockTopPayloads: Array<Payload> = [
  {
    blockNumber: 1234,
    insertedAt: new Date(),
    value: 100,
  },
  {
    blockNumber: 5678,
    insertedAt: new Date(),
    value: 200,
  },
];

const mockValidatorStats = {
  validatorCount: 5,
  knownValidatorCount: 4,
};

const mockValidators = [
  { insertedAt: new Date(), index: "validator-1" },
  { insertedAt: new Date(), index: "validator-2" },
  { insertedAt: new Date(), index: "validator-3" },
  { insertedAt: new Date(), index: "validator-4" },
  { insertedAt: new Date(), index: "validator-5" },
];

export default {
  title: "Components/RelayDashboard",
  component: RelayDashboard,
} as Meta;

const Template: StoryObj<RelayDashboardProps> = {
  args: {
    payloadStats: mockPayloadStats,
    payloads: mockTopPayloads,
    topBuilders: mockTopBuilders,
    topPayloads: mockTopPayloads,
    validatorStats: mockValidatorStats,
    validators: mockValidators,
  },
};

export const Default = Template;
