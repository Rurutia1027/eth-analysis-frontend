import { within, userEvent, expect } from "@storybook/test";
import { StoryObj } from "@storybook/react";
import CustomGasSection from "../../../dashboards/sections/GasSection";

const meta = {
  title: "Sections/GasSection",
  component: CustomGasSection,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
