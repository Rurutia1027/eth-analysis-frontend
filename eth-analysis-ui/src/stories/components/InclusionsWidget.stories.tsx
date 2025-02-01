import { Meta, StoryObj } from "@storybook/react";
import InclusionsWidget from "../../relay/components/InclusionsWidget";
import { Payload } from "../../relay/types";
import * as D from "date-fns";

// Mock payload data
const mockPayloads: Payload[] = [
  {
    blockNumber: 19500000,
    insertedAt: D.subMinutes(new Date(), 5), // 5 minutes ago
    value: 1.2345,
  },
  {
    blockNumber: 19500001,
    insertedAt: D.subMinutes(new Date(), 10), // 10 minutes ago
    value: 2.6789,
  },
  {
    blockNumber: 19500002,
    insertedAt: D.subMinutes(new Date(), 15), // 15 minutes ago
    value: 3.4567,
  },
];

// Mocked props for the widget
const defaultArgs = {
  payloadCount: mockPayloads.length,
  totalValue: mockPayloads.reduce((sum, p) => sum + p.value, 0),
  firstPayloadAt: D.subHours(new Date(), 1), // 1 hour ago
  payloads: mockPayloads,
};

export default {
  title: "Components/InclusionsWidget",
  component: InclusionsWidget,
  args: defaultArgs, // Set default props
  argTypes: {
    payloadCount: { control: "number" },
    totalValue: { control: "number" },
    firstPayloadAt: { control: "date" },
  },
} as Meta<typeof InclusionsWidget>;


export const Default: StoryObj<typeof InclusionsWidget> = {};