import { within, userEvent, expect } from "@storybook/test";
import { StoryObj } from "@storybook/react";
import CurrencyControl from "../../../../../components/CurrencyControl";
import { Unit } from "../../../../../constants/denomination";

const meta = {
 title: "Sections/BurnSection/components/CurrencyControl",
 component: CurrencyControl,
 parameters: {
  layout: "fullscreen",
 },
};

export default meta;
type Story = StoryObj<typeof meta>;

// mock arguments passed to CurrencyControl as initialization parameters

const mockSelectedUnit = "eth" as Unit;
const mockOnSetUnit = (unit: Unit) => { }

export const Default: Story = {
 args: {
  selectedUnit: mockSelectedUnit,
  onSetUnit: mockOnSetUnit,
 }
};
