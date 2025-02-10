import { StoryObj } from "@storybook/react";
import { TooltipText } from "../../../../../dashboards/sections/PoapSection";

const meta = {
  title: "Sections/PoapSection/TooltipText",
  component: TooltipText,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    children: <div className="text-stone-600">TooltipText Children</div>,
    inline: true,
  },
};
