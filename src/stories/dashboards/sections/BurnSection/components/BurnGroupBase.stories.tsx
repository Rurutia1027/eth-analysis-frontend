import { StoryObj } from "@storybook/react";
import { TimeFrame } from "../../../../../utils/time-frames";
import BurnGroupBase from "../../../../../components/BurnGroupBase";

const meta = {
 title: "Sections/BurnSection/components/BurnGroupBase",
 component: BurnGroupBase,
 parameters: {
  layout: "fullscreen",
 },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
 args: {
  backgroundClassName: "text-orange-300",
  onClickTimeFrame: () => { },
  timeFrame: "since_merge" as TimeFrame,
  children: <div>StoryBook BurnGroupBase Component</div>,
  title: "Storybook BurnGroupBase"
 }
};

