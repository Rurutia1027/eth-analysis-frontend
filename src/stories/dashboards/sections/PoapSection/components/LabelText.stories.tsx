import { StoryObj } from "@storybook/react";
import LabelText from "../../../../../components/TextNext/LabelText";

const meta = {
  title: "Sections/PoapSection/LabelText",
  component: LabelText,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    children: <div className="text-slate-500">Label Text Content</div>,
  },
};
