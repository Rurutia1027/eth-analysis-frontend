import { within, userEvent, expect } from "@storybook/test";
import { StoryObj } from "@storybook/react";
import CustomFlippeningSection from "../../../dashboards/sections/FlippeningSection";

const meta = {
  title: "Sections/FlippeningSection",
  component: CustomFlippeningSection,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
