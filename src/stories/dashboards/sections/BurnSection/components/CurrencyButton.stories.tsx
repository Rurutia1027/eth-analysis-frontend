import { within, userEvent, expect } from "@storybook/test";
import { StoryObj } from "@storybook/react";
import { CurrencyButton } from "../../../../../components/CurrencyControl";
import { Unit } from "../../../../../constants/denomination";

const meta = {
 title: "Sections/BurnSection/components/CurrencyButton",
 component: CurrencyButton,
 parameters: {
  layout: "fullscreen",
 },
};

export default meta;
type Story = StoryObj<typeof meta>;

// mock arguments passed to CurrencyControl as initialization parameters

const mockOnClick = (unit: Unit) => { }
const mockSelectedUnit = "eth" as Unit;
const mockUnit = "eth" as Unit;

export const SelectedEthCurrencyButton: Story = {
 args: {
  onClick: mockOnClick,
  selectedUnit: mockSelectedUnit,
  unit: mockUnit,
 }
};

export const SelectedUsdCurrencyButton: Story = {
 args: {
  onClick: (unit: Unit) => { },
  selectedUnit: "usd" as Unit,
  unit: "usd" as Unit,
 }
};
