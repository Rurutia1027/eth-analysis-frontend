import { StoryObj } from "@storybook/react";
import WidgetErrorBoundary from "../../../../../components/WidgetErrorBoundary";
import { ClaimPoap } from "../../../../../dashboards/sections/PoapSection";
import { useCallback, useState } from "react";

const meta = {
  title: "Sections/PoapSection/WidgetErrorBoundary",
  component: WidgetErrorBoundary,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "claim POAP Title",
    children: <div>claim POAP Content</div>,
  },
};
