import { within, userEvent, expect } from "@storybook/test";
import { StoryObj } from "@storybook/react";
import CustomTotalValueSecuredSection from "../../mainsite/sections/TotalValueSecuredSection";

const meta = {
  title: "Sections/TotalValueSecuredSection",
  component: CustomTotalValueSecuredSection,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
