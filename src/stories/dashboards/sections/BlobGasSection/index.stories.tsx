import { StoryObj } from "@storybook/react";
import BlobGasSection from "../../../../dashboards/sections/BlobGasSection";
import { MouseEvent } from "react";

const meta = {
 title: "Sections/BlobGasSection",
 component: BlobGasSection,
 parameters: {
  layout: "fullscreen",
 },
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
 args: {
  timeFrame: "d7",
  onClickTimeFrame: async (e: MouseEvent<HTMLElement>) => {
   console.log('invoked');
  },
 }
};
