import { within, userEvent, expect } from "@storybook/test";
import CustomIndex from "../../pages/index";
import { StoryObj } from "@storybook/react";

const meta = {
  title: "Pages/Index",
  component: CustomIndex,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
