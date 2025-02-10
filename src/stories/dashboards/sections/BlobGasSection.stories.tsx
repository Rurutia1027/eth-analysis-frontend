import { within, userEvent, expect } from "@storybook/test";
import { StoryObj } from "@storybook/react";
import CustomBlobGasSection from "../../../dashboards/sections/BlobGasSection";

const meta = {
  title: "Sections/BlobGasSection",
  component: CustomBlobGasSection,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
