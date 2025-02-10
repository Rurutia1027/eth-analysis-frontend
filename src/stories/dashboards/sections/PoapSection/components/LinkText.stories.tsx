import { StoryObj } from "@storybook/react";
import LinkText from "../../../../../components/TextNext/LinkText";

const meta = {
  title: "Sections/PoapSection/LinkText",
  component: LinkText,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    children: <div className="text-slate-500">Link Text Content</div>,
  },
};
