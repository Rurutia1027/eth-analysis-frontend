import { StoryObj } from "@storybook/react";
import BlobGasMarketWidget from "../../../../../components/BlobGasMarketWidget";
import { TimeFrame } from "../../../../../utils/time-frames";

const mockBaseFeesMap: Record<number, number> = {
 1: 0.15,
 2: 9.007,
 3: 0.004,
 4: 0.006,
 5: 0.008,
};



const mockMax: number = 0.01; // Max base fee for visualization
const mockOnClickTimeFrame = () => {
 console.log(`Time frame clicked`);
};
const mockTimeFrame: string = '1d'; // Time frame example ('1d', '7d', '1m', etc.)

const meta = {
 title: "Sections/BlobGasSection/components/BlobGasMarketWidget",
 component: BlobGasMarketWidget,
 parameters: {
  layout: "fullscreen",
 },
};


export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
 args: {
  onClickTimeFrame: mockOnClickTimeFrame,
  timeFrame: mockTimeFrame as TimeFrame,
 }
};
