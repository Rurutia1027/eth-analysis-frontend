import { within, userEvent, expect } from "@storybook/test";
import * as DateFns from "date-fns";
import { StoryObj } from "@storybook/react";
import { SpanningAge } from "../../../../../components/GasStreakWidget";
import { useNow } from "../../../../../hooks/use-now";

const meta = {
 title: "Sections/GasSection/components/SpanningAge",
 component: SpanningAge,
 parameters: {
  layout: "centered",
 },
};

const startedOn = new Date().toISOString();

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {

 args: {
  isLoading: false,
  startedOn: startedOn,
  count: 3
 },
};
