import { within, userEvent, expect } from "@storybook/test";
import { StoryObj } from "@storybook/react";
import { GasMarketWidget } from "../../../../../components/GasMarketWidget";
import { TimeFrame } from "../../../../../utils/time-frames";


const meta = {
 title: "Sections/GasSection/components/GasMarketWidget",
 component: GasMarketWidget,
 parameters: {
  layout: "fullscreen",
 },
};

const mockOnClickTimeFrame = () => {
 console.log("mockOnClickTimeFrame!");
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
 args: {
  onClickTimeFrame: mockOnClickTimeFrame,
  timeFrame: "since_burn" as TimeFrame,
  blobFees: true,
  barrierGwei: 3948.39,
 },
};
