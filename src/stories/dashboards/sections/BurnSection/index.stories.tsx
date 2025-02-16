import { within, userEvent, expect } from "@storybook/test";
import { StoryObj } from "@storybook/react";
import BurnSection from "../../../../dashboards/sections/BurnSection";
import { TimeFrame } from "../../../../utils/time-frames";

const meta = {
  title: "Sections/BurnSection",
  component: BurnSection,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const mockOnClickTimeFrame = () => { }
const mockOnSetTimeFrame = () => { }

export const Default: Story = {
  args: {
    timeFrame: "1d" as TimeFrame,
    onClickTimeFrame: mockOnSetTimeFrame,
    onSetTimeFrame: mockOnSetTimeFrame,
  }
};
