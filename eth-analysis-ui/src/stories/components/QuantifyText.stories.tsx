import { Meta, StoryObj } from "@storybook/react";
import QuantifyText from "../../components/TextNext/QuantifyText";

export default {
  title: "Components/QuantifyText",
  component: QuantifyText,
  argTypes: {
    amountPostfix: { control: "text" },
    children: { control: "text", defaultValue: "1234" },
    className: { control: "text" },
    color: { control: "text", defaultValue: "text-white" },
    lineHeight: { control: "text", defaultValue: "leading-tight" },
    size: { control: "text", defaultValue: "text-lg" },
    tooltip: { control: "text" },
    unitPostfix: { control: "text", defaultValue: "ETH" },
    unitPostfixColor: { control: "text", defaultValue: "text-gray-600" },
    unitPostfixMargin: { control: "text", defaultValue: "ml-1" },
    weight: { control: "text", defaultValue: "font-bold" },
  },
} as Meta<typeof QuantifyText>;

export const Default: StoryObj<typeof QuantifyText> = {
  args: {
    children: "1234",
    unitPostfix: "ETH",
    size: "text-lg",
    color: "text-white",
    weight: "font-normal",
  },
};

export const CustomColor: StoryObj<typeof QuantifyText> = {
  args: {
    children: <h1>CustomColor</h1>,
    unitPostfix: "BTC",
    size: "text-lg",
    color: "text-green-400",
    weight: "font-extralight",
  },
};

export const WithTooltip: StoryObj<typeof QuantifyText> = {
  args: {
    children: <h2>WithTooltip</h2>,
    unitPostfix: "USD",
    size: "text-lg",
    color: "text-yellow-300",
    tooltip: "this is the total amount in USD",
  },
};
