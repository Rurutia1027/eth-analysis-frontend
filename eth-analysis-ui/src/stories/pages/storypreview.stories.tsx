import React from "react";
import { Meta, StoryObj } from '@storybook/react'; 
import StoryPreview, { StaticProps } from "../../pages/storypreview";
import { SWRConfig } from "swr";

// Mocking StaticProps that would come from getStaticProps
const mockFallbackData = {
  'https://ultrasound.money/api/data': {
    burn: {
      total: 4500000,
      daily: 12000,
      blockRate: 2.5,
    },
    metrics: {
      gasUsed: 3500000,
      txCount: 100000,
      avgTxFee: 0.1,
    },
    network: 'Ethereum',
    timestamp: '2025-01-31T00:00:00Z',
  },
};

const meta: Meta<typeof StoryPreview> = {
  title: 'Pages/StoryPreview',
  component: StoryPreview,
  tags: ['autodocs'],
  argTypes: {
    fallback: {
      description: 'Static fallback data to pass into SWRConfig',
      control: 'object',
    },
  },
};

export default meta;

type Story = StoryObj<typeof StoryPreview>;

export const Default: Story = {
  args: {
    fallback: mockFallbackData,
  },
  render: (args) => (
    <SWRConfig value={{ fallback: args.fallback }}>
      <StoryPreview {...args} />
    </SWRConfig>
  ),
};