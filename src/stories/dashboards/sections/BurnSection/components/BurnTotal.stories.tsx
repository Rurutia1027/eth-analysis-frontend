import { StoryObj } from "@storybook/react";
import { Unit } from "../../../../../constants/denomination";
import BurnTotal from "../../../../../components/BurnTotal";
import { TimeFrame } from "../../../../../utils/time-frames";

const meta = {
 title: "Sections/BurnSection/components/BurnTotal",
 component: BurnTotal,
 parameters: {
  layout: "fullscreen",
 },
};

export default meta;
type Story = StoryObj<typeof meta>;

// mock arguments passed to CurrencyControl as initialization parameters
const mockOnClickTimeFrame = () => { }
const mockTimeFrame = "since_merge" as TimeFrame;
const mockUnit = "eth" as Unit;


export const Default: Story = {
 args: {
  onClickTimeFrame: mockOnClickTimeFrame,
  timeFrame: mockTimeFrame,
  unit: mockUnit,
 }
};

