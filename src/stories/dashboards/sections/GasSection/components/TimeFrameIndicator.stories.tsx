import { within, userEvent, expect } from "@storybook/test";
import { StoryObj } from "@storybook/react";
import TimeFrameIndicator from "../../../../../components/TimeFrameIndicator";

const meta = {
  title: "Sections/GasSection/components/TimeFrameIndicator",
  component: TimeFrameIndicator,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    className: "",
    hideTimeFrameLabel: false,
    onClickTimeFrame: () => {},
    timeFrame: "since_burn",
  },
};
