import type { Meta, StoryObj } from "@storybook/react";
import BodyTextV2 from "../../components/TextNext/BodyTextV2";
import { title } from "process";
import { Component } from "react";
import BodyText from "../../components/TextNext/BodyText";

export default {
  title: "Components/BodyTextV2",
  component: BodyTextV2,
  argTypes: {
    color: {
      control: "text",
      description: "Sets the text color (e.g., 'text-gray-500')",
      defaultValue: "text-slateus-200",
    },
    className: {
      control: "text",
      description: "Addiitonal class names for styling",
    },
    inline: {
      control: "boolean",
      description: "if true, displays text inline",
      defaultValue: false,
    },
  },
} as Meta<typeof BodyTextV2>;

export const Default: StoryObj<typeof BodyTextV2> = {
  args: {
    children: "This is default BodyTextV2",
    color: "text-black-499",
  },
};

export const CustomColor: StoryObj<typeof BodyTextV2> = {
  args: {
    children: "This text has a custom color",
    color: "text-blue-500",
  },
};

export const InlineText: StoryObj<typeof BodyText> = {
  args: {
    children: "This text is in inline",
    inline: true,
    className: "text-green-500",
  },
};

export const LargeText: StoryObj<typeof BodyTextV2> = {
  args: {
    children: "this text is larger",
    className: "text-xl text-red-600",
  },
};
