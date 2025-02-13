import { StoryObj } from "@storybook/react";
import GasSection from "../../../../dashboards/sections/GasSection";
import { useRouter } from "next/router";
import { TimeFrame } from "../../../../utils/time-frames";
import { MouseEvent } from "react";
import { getPreviousTimeFrame, getNextTimeFrame } from "../../../../utils/time-frames";


const meta = {
  title: "Sections/GasSection",
  component: GasSection,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Function component to be used in Storybook
export const Default: Story = {
 args: {
  timeFrame: "d7",  
  onClickTimeFrame: async (e: MouseEvent<HTMLElement>) => {
   console.log('invoked'); 
    },
  },
};