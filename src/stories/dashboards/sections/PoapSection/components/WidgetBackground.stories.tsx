import { StoryObj } from "@storybook/react";
import { WidgetBackground } from "../../../../../components/WidgetSubcomponents";

const meta = {
  title: "Sections/PoapSection/WidgetBackground",
  component: WidgetBackground,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    className: "flex flex-col justify-between",
    children: (
      <div className="rounded-lg bg-slateus-700 p-8 text-white">
        TooltipTitle Children Content
      </div>
    ),
  },
};
