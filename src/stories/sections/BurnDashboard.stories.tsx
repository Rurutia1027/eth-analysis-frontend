import { within, userEvent, expect } from "@storybook/test";
import { StoryObj } from "@storybook/react";
import CustomBurnDashboard from "../../dashboards/sections/BurnDashboard";

const meta = {
  title: "Sections/BurnDashboard",
  component: CustomBurnDashboard,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
