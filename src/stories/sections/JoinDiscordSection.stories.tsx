import { within, userEvent, expect } from "@storybook/test";
import { StoryObj } from "@storybook/react";
import CustomJoinDiscoradSection from "../../dashboards/sections/JoinDiscoradSection";

const meta = {
  title: "Sections/JoinDiscoradSection",
  component: CustomJoinDiscoradSection,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
