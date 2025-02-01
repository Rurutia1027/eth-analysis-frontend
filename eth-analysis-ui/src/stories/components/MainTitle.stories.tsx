// src/stories/MainTitle.stories.tsx

import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import MainTitle from "../../components/MainTitle";

const meta: Meta<typeof MainTitle> = {
  title: "Components/MainTitle",
  component: MainTitle,
  argTypes: {
    className: {
      control: "text",
      description: "Custom class for styling the component",
      defaultValue: "", // Default className if none provided
    },
    onClick: {
      action: "clicked", // Storybook's action handler to track clicks
      description: "Function to be called on title click",
    },
  },
};

export default meta;

type Story = StoryObj<typeof MainTitle>;

// Default story with basic title
export const Default: Story = {
  args: {
    children: "Welcome to the Main Title",
    className: "", // Default to no custom class
  },
};

// Custom className story to demonstrate styling flexibility
export const CustomClassName: Story = {
  args: {
    children: "Custom Styled Title",
    className: "text-green-500", // Example of a custom class applied
  },
};

// Story with onClick functionality (clickable title)
export const ClickableTitle: Story = {
  args: {
    children: "Click Me!",
    onClick: () => alert("Title clicked!"), // Alert as an example
  },
};
