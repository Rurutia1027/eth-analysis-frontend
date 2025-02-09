import type { Meta, StoryObj } from "@storybook/react";
import LeaderboardSection from "../../relay/sections/LeaderboardSection";
import { Payload, Builder } from "../../relay/types";

// Define mock data for the story
const mockTopBuilders: Array<Builder> = [
  { builderName: "Builder 1", blockCount: 100 },
  { builderName: "Builder 2", blockCount: 80 },
  { builderName: "Builder 3", blockCount: 60 },
];

const mockTopPayloads: Array<Payload> = [
  { blockNumber: 1, insertedAt: new Date(), value: 50 },
  { blockNumber: 2, insertedAt: new Date(), value: 40 },
  { blockNumber: 3, insertedAt: new Date(), value: 30 },
];

const meta: Meta<typeof LeaderboardSection> = {
  title: "Components/LeaderboardSection",
  component: LeaderboardSection,
  args: {
    payloadCount: 200,
    topBuilders: mockTopBuilders,
    topPayloads: mockTopPayloads,
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof LeaderboardSection>;

// Default leaderboard section
export const Default: Story = {
  args: {
    payloadCount: 200,
    topBuilders: mockTopBuilders,
    topPayloads: mockTopPayloads,
  },
};

// Leaderboard section with different number of builders
export const WithMoreBuilders: Story = {
  args: {
    payloadCount: 500,
    topBuilders: [
      ...mockTopBuilders,
      { builderName: "Builder 4", blockCount: 50 },
      { builderName: "Builder 5", blockCount: 40 },
    ],
    topPayloads: mockTopPayloads,
  },
};

// Leaderboard section with higher payload count
export const WithHigherPayloadCount: Story = {
  args: {
    payloadCount: 1000,
    topBuilders: mockTopBuilders,
    topPayloads: [
      ...mockTopPayloads,
      { blockNumber: 4, insertedAt: new Date(), value: 20 },
    ],
  },
};

// Leaderboard section with different top payloads
export const WithDifferentPayloads: Story = {
  args: {
    payloadCount: 200,
    topBuilders: mockTopBuilders,
    topPayloads: [
      { blockNumber: 1, insertedAt: new Date(), value: 90 },
      { blockNumber: 2, insertedAt: new Date(), value: 60 },
      { blockNumber: 3, insertedAt: new Date(), value: 30 },
    ],
  },
};
