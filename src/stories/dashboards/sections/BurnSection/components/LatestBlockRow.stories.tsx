import { StoryObj } from "@storybook/react";
import { Unit } from "../../../../../constants/denomination";
import { LatestBlockRow } from "../../../../../components/LatestBlocks";
import { GweiNumber, WeiNumber } from "../../../../../constants/eth-units";

const meta = {
 title: "Sections/BurnSection/components/LatestBlockRow",
 component: LatestBlockRow,
 parameters: {
  layout: "fullscreen",
 },
};

export default meta;
type Story = StoryObj<typeof meta>;

// mock arguments passed to CurrencyControl as initialization parameters

export const Default: Story = {
 args: {
  barrier: 2323434342.9234 as GweiNumber,
  baseFeePerGas: 2323434342 as WeiNumber,
  fees: 294834 as number,
  feesUsd: 2424232434 as number,
  number: 2323434342 as number,
  unit: "eth" as Unit,
 }
};
