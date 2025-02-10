import { StoryObj } from "@storybook/react";
import { ClaimPoapTooltip } from "../../../../../dashboards/sections/PoapSection";

const meta = {
  title: "Sections/PoapSection/ClaimPoapTooltip",
  component: ClaimPoapTooltip,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    className: "",
    onClickClose: () => alert("Tooltip closed!"),
  },
};
