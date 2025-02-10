import { within, userEvent, expect } from "@storybook/test";
import { StoryObj } from "@storybook/react";
import CustomSupplyDashboard from "../../../dashboards/sections/SupplyDashboard";

const meta = {
  title: "Sections/SupplyDashboard",
  component: CustomSupplyDashboard,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
