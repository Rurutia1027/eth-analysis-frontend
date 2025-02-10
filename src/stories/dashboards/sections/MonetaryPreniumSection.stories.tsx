import { within, userEvent, expect } from "@storybook/test";
import { StoryObj } from "@storybook/react";
import CustomMonetaryPremiumSection from "../../../dashboards/sections/MonetaryPremiumSection";

const meta = {
  title: "Sections/MonetaryPremiumSection",
  component: CustomMonetaryPremiumSection,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
