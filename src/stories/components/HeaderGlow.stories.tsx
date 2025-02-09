// src/stories/HeaderGlow.stories.tsx

import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import HeaderGlow from "../../components/HeaderGlow";

const meta: Meta<typeof HeaderGlow> = {
  title: "Components/HeaderGlow",
  component: HeaderGlow,
  argTypes: {
    className: {
      control: "text",
      description: "Custom class for styling the component",
      defaultValue: "", // Default value for className
    },
  },
};

export default meta;

type Story = StoryObj<typeof HeaderGlow>;

// Default story with no additional className
export const Default: Story = {
  args: {
    className: "", // Default to no custom class
  },
};

// Custom className story to show styling flexibility
export const CustomClassName: Story = {
  args: {
    className: "bg-blue-500", // Example of a custom class applied
  },
};

// Custom size variant to show responsiveness and layout changes
export const CustomSize: Story = {
  args: {
    className: "xs:h-[550px] sm:h-[650px] md:h-[750px] lg:h-[850px]", // Example of height variation
  },
};
