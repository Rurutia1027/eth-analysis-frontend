import { StoryObj } from "@storybook/react";
import { Unit } from "../../../../../constants/denomination";
import { TimeFrame } from "../../../../../utils/time-frames";
import BurnCategoryWidget from "../../../../../components/BurnCategoryWidget";

const meta = {
 title: "Sections/BurnSection/components/BurnCategoryWidget",
 component: BurnCategoryWidget,
 parameters: {
  layout: "fullscreen",
 },
};

export default meta;
type Story = StoryObj<typeof meta>;

// mock arguments passed to CurrencyControl as initialization parameters
const mockOnClickTimeFrame = () => { }
const mockTimeFrame = "since_merge" as TimeFrame;

export const Default: Story = {
 args: {
  onClickTimeFrame: mockOnClickTimeFrame,
  timeFrame: mockTimeFrame,
 }
};

