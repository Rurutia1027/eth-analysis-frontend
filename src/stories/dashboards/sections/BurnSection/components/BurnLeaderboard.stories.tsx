import { StoryObj } from "@storybook/react";
import { Unit } from "../../../../../constants/denomination";
import { TimeFrame } from "../../../../../utils/time-frames";
import BurnLeaderboard from "../../../../../components/BurnLeaderboard";

const meta = {
 title: "Sections/BurnSection/components/BurnLeaderboard",
 component: BurnLeaderboard,
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
  unit: "eth" as Unit
 }
};

