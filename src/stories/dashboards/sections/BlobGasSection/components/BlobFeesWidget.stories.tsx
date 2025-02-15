import { StoryObj } from "@storybook/react";
import BlobFeesWidget from "../../../../../components/BlobFeesWidget";
import { TimeFrame } from "../../../../../utils/time-frames";
import { BaseFeePoint } from "../../../../../components/BaseFeesWidget";
import { JsTimestamp } from "../../../../../constants/time";
import { WeiNumber } from "../../../../../constants/eth-units";

const mockBaseFeesMap: Record<number, number> = {
 1: 0.15,
 2: 9.007,
 3: 0.004,
 4: 0.006,
 5: 0.008,
};

const mockBaseFeesSeries: BaseFeePoint[] = [
 [ 1633641600000, 10000000000 ], // (timestamp, Wei amount)
 [ 1633728000000, 1100000000 ],
 [ 1633814400000, 1050000000 ],
 [ 1633900800000, 1200000000 ],
 [ 1633987200000, 1250000000 ],
];

const mockMax: number = 0.01; // Max base fee for visualization
const mockOnClickTimeFrame = () => {
 console.log(`Time frame clicked`);
};
const mockTimeFrame: string = '1d';
const meta = {
 title: "Sections/BlobGasSection/components/BlobFeesWidget",
 component: BlobFeesWidget,
 parameters: {
  layout: "fullscreen",
 },
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
 args: {
  baseFeesMap: mockBaseFeesMap,
  baseFeesSeries: mockBaseFeesSeries,
  max: mockMax,
  onClickTimeFrame: mockOnClickTimeFrame,
  timeFrame: mockTimeFrame as TimeFrame,
 }
};
