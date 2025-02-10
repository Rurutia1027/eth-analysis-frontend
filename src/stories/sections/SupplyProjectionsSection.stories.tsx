import { within, userEvent, expect } from "@storybook/test";
import { StoryObj } from "@storybook/react";
import CustomSupplyProjectionSection from "../../mainsite/sections/SupplyProjectionSection";

const meta = {
  title: "Sections/SupplyProjectionSection",
  component: CustomSupplyProjectionSection,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
