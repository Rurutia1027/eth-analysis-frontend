import { within, userEvent, expect } from "@storybook/test";
import { StoryObj } from "@storybook/react";
import { GasStreakWidget } from "../../../../../components/GasStreakWidget";

const meta = {
 title: "Sections/GasSection/components/GasStreakWidget",
 component: GasStreakWidget,
 parameters: {
  layout: "centered",
 },
};


export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
 args: {
 },
};
