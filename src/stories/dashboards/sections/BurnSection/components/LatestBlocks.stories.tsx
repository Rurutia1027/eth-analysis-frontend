import { StoryObj } from "@storybook/react";
import LatestBlocks from "../../../../../components/LatestBlocks";
import { Unit } from "../../../../../constants/denomination";

const meta = {
 title: "Sections/BurnSection/components/LatestBlocks",
 component: LatestBlocks,
 parameters: {
  layout: "fullscreen",
 },
};

export default meta;
type Story = StoryObj<typeof meta>;

// mock arguments passed to CurrencyControl as initialization parameters

export const Default: Story = {
 args: {
  unit: "usd" as Unit
 }
};
