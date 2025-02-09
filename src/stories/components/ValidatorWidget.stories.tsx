// src/stories/ValidatorWidget.stories.tsx

import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ValidatorWidget from "../../relay/components/ValidatorWidget";

const meta: Meta<typeof ValidatorWidget> = {
  title: "Components/ValidatorWidget",
  component: ValidatorWidget,
  argTypes: {
    validatorCount: {
      control: "number",
      description: "Total number of validators",
      defaultValue: 50,
    },
    knownValidatorCount: {
      control: "number",
      description: "Total known validators",
      defaultValue: 100,
    },
    validators: {
      control: "array",
      description: "List of validator objects",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ValidatorWidget>;

// Default story with mock data for validators
export const Default: Story = {
  args: {
    validatorCount: 50,
    knownValidatorCount: 100,
    validators: [
      { index: "1", insertedAt: new Date("2023-01-01T00:00:00Z") },
      { index: "2", insertedAt: new Date("2023-01-02T00:00:00Z") },
      { index: "3", insertedAt: new Date("2023-01-03T00:00:00Z") },
    ],
  },
};

// Empty state story (no validators)
export const Empty: Story = {
  args: {
    validatorCount: 0,
    knownValidatorCount: 100,
    validators: [],
  },
};

// Large dataset of validators for testing scrollable list
export const LargeList: Story = {
  args: {
    validatorCount: 100,
    knownValidatorCount: 1000,
    validators: Array.from({ length: 50 }, (_, i) => ({
      index: `${i + 1}`,
      insertedAt: new Date(),
    })),
  },
};
