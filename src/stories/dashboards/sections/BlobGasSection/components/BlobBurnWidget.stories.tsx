import { StoryObj } from "@storybook/react";
import BlobBurnWidget from "../../../../../components/BlobBurnWidget";
import { TimeFrame } from "../../../../../utils/time-frames";

const meta = {
 title: "Sections/BlobGasSection/components/BlobBurnWidget",
 component: BlobBurnWidget,
 parameters: {
  layout: "fullscreen",
 },
};

export default meta;

const mockOnClickTimeFrame = () => {
 console.log("mockOnClickTimeFrame!");
};

type Story = StoryObj<typeof meta>;
export const Default: Story = {
 args: {
  onClickTimeFrame: mockOnClickTimeFrame,
  timeFrame: "since_burn" as TimeFrame
 }
};
