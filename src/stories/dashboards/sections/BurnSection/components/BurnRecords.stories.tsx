import { StoryObj } from "@storybook/react";
import { Unit } from "../../../../../constants/denomination";
import { TimeFrame } from "../../../../../utils/time-frames";
import BurnRecords from "../../../../../components/BurnRecords";

const meta = {
 title: "Sections/BurnSection/components/BurnRecords",
 component: BurnRecords,
 parameters: {
  layout: "fullscreen",
 },
};

export default meta;
type Story = StoryObj<typeof meta>;

// mock arguments passed to CurrencyControl as initialization parameters
const mockOnClickTimeFrame = () => { }
const mockTimeFrame = "since_burn" as TimeFrame;


export const Default: Story = {
 args: {
  onClickTimeFrame: mockOnClickTimeFrame,
  timeFrame: mockTimeFrame,
 }
};