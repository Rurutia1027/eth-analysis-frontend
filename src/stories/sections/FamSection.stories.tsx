import { within, userEvent, expect } from "@storybook/test";
import { StoryObj } from "@storybook/react";
import CustomFamSection from "../../mainsite/sections/FamSection";

const meta = {
  title: "Sections/FamSection",
  component: CustomFamSection,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
