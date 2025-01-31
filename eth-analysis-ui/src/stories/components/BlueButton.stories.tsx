import type { Meta, StoryObj } from "@storybook/react";
import BlueButton from "../../components/BlueButton";
import { title } from "process";

export default {
  title: "Components/BlueButton",
  component: BlueButton,
  argTypes: {
    chidlren: {
      control: "text",
      description: "Button label text",
      defaultValue: "click me",
    },
  },
} as Meta<typeof BlueButton>;

export const Default: StoryObj<typeof BlueButton> = {
  args: {
    children: "Click me",
  },
};

export const CustomText: StoryObj<typeof BlueButton> = {
  args: {
    children: "Custom Button",
  },
};
