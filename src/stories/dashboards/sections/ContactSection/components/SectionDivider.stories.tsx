import { StoryObj } from "@storybook/react";
import React, { FC, useState } from "react";
import twitterSvg from "../../../assets/twitter-slateus.svg";
import type { StaticImageData } from "next/image";
import SectionDivider from "../../../../../components/SectionDivider";

const meta = {
  title: "Sections/ContactSection/components/SectionDivider",
  component: SectionDivider,
  parameters: {
    layout: "fullsccenteredreen",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    link: "#",
    subtitle: "Section Divider Subtitle",
    title: "Seciton Divider Title",
  },
};
