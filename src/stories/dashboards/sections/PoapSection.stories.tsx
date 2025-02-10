import { within, userEvent, expect } from "@storybook/test";
import { StoryObj } from "@storybook/react";
import CustomPoapSection from "../../../dashboards/sections/PoapSection";

const meta = {
  title: "Sections/PoapSection",
  component: CustomPoapSection,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
