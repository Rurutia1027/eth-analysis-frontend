import { StoryObj } from "@storybook/react";
import CategorySegment from "../../../../../components/BurnCategoryWidget/CategorySegment";
import testColorOn from "../../../../../assets/roket.svg";
import testColorOff from "../../../../../assets/robot-slateus.svg";
import { StaticImageData } from "next/image";

const meta = {
 title: "Sections/BurnSection/components/CategorySegment",
 component: CategorySegment,
 parameters: {
  layout: "fullscreen",
 },
};

export default meta;
type Story = StoryObj<typeof meta>;

// CategorySegmentProps: 
// imgAlt: string;
// imgName: { colorOn: StaticImageData; colorOff: StaticImageData };
// onHoverCategory: (hovering: boolean) => void;
// percentOfTotalBurn: number | undefined;
// rounded: "left" | "right";
// showHighlight: boolean;

export const Default: Story = {
 args: {
  imgAlt: "image alt content",
  imgName: {
   colorOn: testColorOn as StaticImageData,
   colorOff: testColorOff as StaticImageData
  },
  onHoverCategory: () => { },
  percentOfTotalBurn: 0.5,
  rounded: "right",
  showHighlight: true
 }
};

