import { Meta, StoryObj } from "@storybook/react";
import { Counter } from "./Counter";

export default {
  title: "Example/Counter",
  component: Counter,
  argTypes: {
    label: { control: "text" },
  },
} as Meta<typeof Counter>;

export const Default: StoryObj<typeof Counter> = {
  args: {
    label: "Counter", // Default label for the counter
  },
};

export const CustomLabel: StoryObj<typeof Counter> = {
  args: {
    label: "Custom Counter", // Custom label for the counter
  },
};
