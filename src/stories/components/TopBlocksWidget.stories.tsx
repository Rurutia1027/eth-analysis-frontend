// src/stories/TopBlocksWidget.stories.tsx

import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TopBlocksWidget from "../../relay/sections/LeaderboardSection/TopBlocksWidget";
import { Payload } from "../../relay/types";

const meta: Meta<typeof TopBlocksWidget> = {
  title: "Components/TopBlocksWidget",
  component: TopBlocksWidget,
  argTypes: {
    topBlocks: {
      control: "object",
      description: "Array of top blocks",
      defaultValue: [
        { blockNumber: 123456, insertedAt: new Date(), value: 1.23 },
        { blockNumber: 123457, insertedAt: new Date(), value: 2.34 },
        { blockNumber: 123458, insertedAt: new Date(), value: 3.45 },
        { blockNumber: 123459, insertedAt: new Date(), value: 4.56 },
        { blockNumber: 123460, insertedAt: new Date(), value: 5.67 },
      ] as Payload[], // Default sample data
    },
  },
};

export default meta;

type Story = StoryObj<typeof TopBlocksWidget>;

// Default story with mock data
export const Default: Story = {
  args: {
    topBlocks: [
      { blockNumber: 123456, insertedAt: new Date(), value: 1.23 },
      { blockNumber: 123457, insertedAt: new Date(), value: 2.34 },
      { blockNumber: 123458, insertedAt: new Date(), value: 3.45 },
      { blockNumber: 123459, insertedAt: new Date(), value: 4.56 },
      { blockNumber: 123460, insertedAt: new Date(), value: 5.67 },
    ],
  },
};

// Custom top blocks data (can be used to simulate a different state)
export const CustomTopBlocks: Story = {
  args: {
    topBlocks: [
      { blockNumber: 123461, insertedAt: new Date(), value: 6.78 },
      { blockNumber: 123462, insertedAt: new Date(), value: 7.89 },
      { blockNumber: 123463, insertedAt: new Date(), value: 8.9 },
    ],
  },
};

// Empty list of top blocks (to handle an empty state)
export const EmptyList: Story = {
  args: {
    topBlocks: [],
  },
};
