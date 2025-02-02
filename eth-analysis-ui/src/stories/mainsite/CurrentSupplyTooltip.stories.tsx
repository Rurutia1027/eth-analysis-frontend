// CurrentSupplyTooltip.stories.tsx (assuming you're using TypeScript)
import type { Meta, StoryObj } from "@storybook/react";
import CurrentSupplyTooltip from "../../mainsite/components/CurrentSupplyWidget/CurrentSupplyTooltip";
import type { SupplyParts } from "../../mainsite/api/supply-parts";
import { WeiJSBI } from "../../eth-units";
import JSBI from "jsbi";

// Create mock WeiJSBI values
const mockBeaconBalancesSum: WeiJSBI = JSBI.BigInt(1000000000); // Example value
const mockBeaconDepositsSum: WeiJSBI = JSBI.BigInt(500000000); // Example value
const mockExecutionBalancesSum: WeiJSBI = JSBI.BigInt(2000000000); // Example value

// Mock data for SupplyParts
const mockSupplyParts: SupplyParts = {
  beaconBalancesSum: mockBeaconBalancesSum,
  beaconDepositsSum: mockBeaconDepositsSum,
  executionBalancesSum: mockExecutionBalancesSum,
  slot: 12345,
};

// Meta object for Storybook
const meta: Meta<typeof CurrentSupplyTooltip> = {
  title: "MainSite/CurrentSupplyTooltip",
  component: CurrentSupplyTooltip,
  tags: ["autodocs"],
  argTypes: {
    ethSupply: {
      description: "The ETH supply parts data",
      control: {
        type: "object",
        // Provide a custom structure for the object control
        structure: {
          beaconBalancesSum: { type: "number", subtype: "bigint" },
          beaconDepositsSum: { type: "number", subtype: "bigint" },
          executionBalancesSum: { type: "number", subtype: "bigint" },
          slot: { type: "number" },
        },
      },
    },
    onClickClose: {
      description: "Function to handle closing the tooltip",
      action: "close",
    },
  },
};

export default meta;

type Story = StoryObj<typeof CurrentSupplyTooltip>;

// Story for the default state
export const Default: Story = {
  args: {
    ethSupply: mockSupplyParts,
    onClickClose: () => console.log("Close button clicked"),
  },
};
