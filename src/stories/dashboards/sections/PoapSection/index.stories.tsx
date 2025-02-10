import { StoryObj } from "@storybook/react";
import {
  ClaimPoapTooltip,
  PoapSection,
} from "../../../../dashboards/sections/PoapSection";
const meta = {
  title: "Sections/PoapSection",
  component: PoapSection,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
