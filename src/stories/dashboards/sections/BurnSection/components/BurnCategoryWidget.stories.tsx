import { StoryObj } from "@storybook/react";
import BurnCategoryWidget from "../../../../../components/BurnCategoryWidget";
import { TimeFrame } from "../../../../../utils/time-frames";

const meta = {
 title: "Sections/BurnSection/components/BurnCategoryWidget",
 component: BurnCategoryWidget,
 parameters: {
  layout: "fullscreen",
 },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Props: 
//  onClickTimeFrame: OnClick;
// timeFrame: TimeFrame;
export const Default: Story = {
 args: {
  onClickTimeFrame: () => { },
  timeFrame: "d7" as TimeFrame,
 }
};

