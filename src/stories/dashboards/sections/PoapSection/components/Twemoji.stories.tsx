import React from "react";
import { StoryObj } from "@storybook/react";
import Twemoji from "../../../../../components/Twemoji";
import { TooltipText } from "../../../../../dashboards/sections/PoapSection";

const meta = {
  title: "Sections/PoapSection/Twemoji",
  component: Twemoji,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    wrapper: false,
    imageClassName: "inline-block align-middle h-4 ml-1",
    children: (
      <TooltipText inline={true}>
        <div className="text-slate-500">Twimoji Content</div>
      </TooltipText>
    ),
  },
};
