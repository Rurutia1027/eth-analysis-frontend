import { StoryObj } from "@storybook/react";
import { Unit } from "../../../../../constants/denomination";
import { CategorySegment } from "../../../../../components/BurnCategoryWidget";
import { TimeFrame } from "../../../../../utils/time-frames";
import { StaticImageData } from "next/legacy/image";
import testSvg from "../../../../assets/discord.svg"

const meta = {
 title: "Sections/BurnSection/components/CategorySegment",
 component: CategorySegment,
 parameters: {
  layout: "fullscreen",
 },
};

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
 args: {
  imgAlt: "img alt",
  imgName: { coloron: testSvg as StaticImageData, coloroff: testSvg as StaticImageData },
  onHoverCategory: () => { },
  percentOfTotalBurn: 29484 as number,
  showHighlight: true,
 }
};

