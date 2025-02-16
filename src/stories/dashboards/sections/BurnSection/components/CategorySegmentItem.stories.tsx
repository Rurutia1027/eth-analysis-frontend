import { StoryObj } from "@storybook/react";
import { Unit } from "../../../../../constants/denomination";
import { CategorySegmentItem } from "../../../../../components/BurnCategoryWidget";
import { TimeFrame } from "../../../../../utils/time-frames";
import { CategoryProps } from "../../../../../components/BurnCategoryWidget";
import { CategoryId } from "../../../../../api/burn-categories";
import testSvg from "../../../../assets/discord.svg"

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
const mockCategory: CategoryProps = {
 id: "defi" as CategoryId, // Replace with a valid CategoryId
 fees: 123.45,
 feesUsd: 678.90,
 transactionCount: 50,
 percentOfTotalBurn: 12.3,
 percentOfTotalBurnUsd: 14.5,
 imgAlt: "Test Category Icon",
 imgName: { coloron: testSvg, coloroff: testSvg },
 onHoverCategory: (hovering: boolean) => {
  console.log(`Category is ${hovering ? "hovered" : "not hovered"}`);
 },
 showHighlight: true,
};

export const Default: Story = {
 args: {
  isFirst: false,
  isLast: true,
  category: mockCategory,
 }
};

