import type { Meta, StoryObj } from "@storybook/react";
import LabelText from "../../components/TextNext/LabelText";

export default {
  title: "Components/LabelText",
  component: LabelText,
  argTypes: {
    color: {
      control: "text",
      descriptin: "Sets the text color",
      defaultValue: "text-slateus-200",
    },
    className: {
      control: "text",
      description: "Additional class names for styleing",
    },
  },
} as Meta<typeof LabelText>;

export const Default: StoryObj<typeof LabelText> = {
  args: {
    children: "Default Label",
  },
};

export const CustomColor: StoryObj<typeof LabelText> = {
  args: {
    children: "Custom Color Label",
    color: "text-red-500",
  },
};

export const UppercaseTracking: StoryObj<typeof LabelText> = {
  args: {
    children: "Tracking Wide",
    className: "tracking-wide text-blue-500",
  },
};
