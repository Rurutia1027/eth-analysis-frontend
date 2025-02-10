import { StoryObj } from "@storybook/react";
import { TooltipTitle } from "../../../../../components/Texts";

const meta = {
  title: "Sections/PoapSection/TooltipTitle",
  component: TooltipTitle,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    children: (
      <div className="text-slate-500">TooltipTitle Children Content</div>
    ),
  },
};
