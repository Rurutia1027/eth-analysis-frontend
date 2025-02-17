import { StoryObj } from "@storybook/react";
import { Unit } from "../../../../../constants/denomination";
import { TimeFrame } from "../../../../../utils/time-frames";
import BurnRecords from "../../../../../components/BurnRecords";
import type { CategoryProps } from "../../../../../components/BurnCategoryWidget/CategorySegmentItem";
import CategorySegmentItem from "../../../../../components/BurnCategoryWidget/CategorySegmentItem";
import { CategoryId } from "../../../../../api/burn-categories";
import { StaticImageData } from "next/image";
import testColorOn from "../../../../../assets/Glow@2x.svg";
import testColorOff from "../../../../../assets/telescope.svg";

const meta = {
 title: "Sections/BurnSection/components/CategorySegmentItem",
 component: CategorySegmentItem,
 parameters: {
  layout: "fullscreen",
 },
};

export default meta;
type Story = StoryObj<typeof meta>;

// mock arguments passed to CurrencyControl as initialization parameters

const mockCategoryProps: CategoryProps = {
 id: "defi" as CategoryId,
 fees: 1000,
 feesUsd: 500,
 transactionCount: 150,
 percentOfTotalBurn: 0.25,
 percentOfTotalBurnUsd: 125,
 imgAlt: "DeFi category image",
 imgName: {
  colorOn: testColorOn as StaticImageData, // Replace with actual StaticImageData or mock path
  colorOff: testColorOff as StaticImageData // Replace with actual StaticImageData or mock path
 },
 onHoverCategory: (hovering: boolean) => {
  console.log(`Hovering: ${hovering}`);
 },
 showHighlight: true, // mock a boolean value for showHighlight
};

export const Default: Story = {
 args: {
  categoryProps: mockCategoryProps,
  isFirst: true,
  isLast: false
 }
};

