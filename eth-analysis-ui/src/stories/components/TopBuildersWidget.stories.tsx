import type { Meta, StoryObj } from "@storybook/react";
import type { Builder } from "../../relay/types";
import TopBuildersWidget from "../../relay/sections/LeaderboardSection/TopBuildersWidget";

// Mock Data for different story cases
const sampleBuilders: Builder[] = [
  { builderName: "Builder A", blockCount: 300 },
  { builderName: "Builder B", blockCount: 250 },
  { builderName: "Builder C", blockCount: 200 },
  { builderName: "Builder D", blockCount: 150 },
  { builderName: "Builder E", blockCount: 100 },
  { builderName: "Builder F", blockCount: 90 },
  { builderName: "Builder G", blockCount: 80 },
  { builderName: "Builder H", blockCount: 70 },
  { builderName: "Builder I", blockCount: 60 },
  { builderName: "Builder J", blockCount: 50 },
];

const largeBuilders: Builder[] = Array.from({ length: 30 }, (_, index) => ({
  builderName: `Builder ${index + 1}`,
  blockCount: Math.floor(Math.random() * 500),
}));

const meta: Meta<typeof TopBuildersWidget> = {
  title: "Components/TopBuildersWidget",
  component: TopBuildersWidget,
  args: {
    payloadCount: 1000, // Default payload count
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TopBuildersWidget>;

// Default view with sample builders
export const Default: Story = {
  args: {
    topBuilders: sampleBuilders,
  },
};

// Empty state case
export const EmptyState: Story = {
  args: {
    topBuilders: [],
  },
};

// Large dataset case (scrollable)
export const LargeDataset: Story = {
  args: {
    topBuilders: largeBuilders,
  },
};
