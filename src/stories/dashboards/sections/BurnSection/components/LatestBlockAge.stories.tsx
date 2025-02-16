import { StoryObj } from "@storybook/react";
import { LatestBlockAge } from "../../../../../components/LatestBlocks";

const meta = {
 title: "Sections/BurnSection/components/LatestBlockAge",
 component: LatestBlockAge,
 parameters: {
  layout: "fullscreen",
 },
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
 args: {
 }
};
