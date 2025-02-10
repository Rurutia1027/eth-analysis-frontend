import { within, userEvent, expect } from "@storybook/test";
import CustomDashboard from "../../dashboards/Dashboards";
import { StoryObj } from "@storybook/react";

const meta = {
  title: "Dashboards/CustomDashboard",
  component: CustomDashboard,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
