import { StoryObj } from "@storybook/react";
import { SectionTitle } from "../../../../../components/TextNext/SectionTitle";

const meta = {
  title: "Sections/PoapSection/SectionTitle",
  component: SectionTitle,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    className: "pt-16 mt-16",
    link: "poap",
    subtitle: "only 1,559",
    children: "ultra sound POAP",
  },
};
