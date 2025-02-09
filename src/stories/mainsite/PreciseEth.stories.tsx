// PreciseEth.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import PreciseEth from "../../mainsite/components/CurrentSupplyWidget/PreciseEth";
import JSBI from "jsbi";

// Meta object for Storybook
const meta: Meta<typeof PreciseEth> = {
  title: "MainSite/PreciseEth",
  component: PreciseEth,
  tags: ["autodocs"],
  argTypes: {
    amount: {
      description: "The amount in Wei (JSBI) to be displayed as ETH.",
      control: {
        type: "number",
        step: 1e18, // Since 1 ETH = 1e18 Wei
        min: 0,
      },
      table: {
        type: { summary: "JSBI" },
      },
    },
    justify: {
      description: 'Justification for the text. Can be "justify - end".',
      control: {
        type: "select",
        options: ["", "justify-end"],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof PreciseEth>;

// Story for default state
export const Default: Story = {
  args: {
    amount: JSBI.BigInt(1e18), // 1 ETH in Wei
  },
};

// Story for justified state
export const JustifiedEnd: Story = {
  args: {
    amount: JSBI.BigInt(2e18), // 2 ETH in Wei
    justify: "justify-end",
  },
};
