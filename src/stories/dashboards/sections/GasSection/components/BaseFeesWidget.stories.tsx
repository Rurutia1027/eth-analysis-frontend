import { within, userEvent, expect } from "@storybook/test";
import { StoryObj } from "@storybook/react";
import { BaseFeesWidget } from "../../../../../components/BaseFeesWidget";
import { MouseEvent } from "react";
import { BaseFeePoint } from "../../../../../components/BaseFeesWidget";

const meta = {
  title: "Sections/GasSection/components/BaseFeesWidget",
  component: BaseFeesWidget,
  parameters: {
    layout: "centered",
  },
};

// mock parameters required by BaseFeesWidget
const mockBaseFeesMap = {
  1: 50,
  2: 75,
  3: 100,
  4: 125,
  5: 150,
};

const mockBaseFeesSeries: BaseFeePoint[] = [
  [1670000000, 50],
  [1670003600, 75],
  [1670007200, 100],
  [1670010800, 125],
  [1670014400, 150],
];

const mockOnClickTimeFrame = (e: MouseEvent<HTMLElement>) => {
  console.log("TimeFrame clicked!", e);
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    barrier: 1,
    baseFeesMap: mockBaseFeesMap,
    baseFeesSeries: mockBaseFeesSeries,
    max: 200,
    onClickTimeFrame: mockOnClickTimeFrame,
    timeFrame: "since_burn",
    blobFees: false,
  },
};
