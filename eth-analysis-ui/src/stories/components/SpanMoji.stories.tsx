// src/stories/SpanMoji.stories.tsx

import React from "react";
import SpanMoji from "../../components/SpanMoji";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SpanMoji> = {
  title: "Components/SpanMoji",
  component: SpanMoji,
  argTypes: {
    emoji: {
      control: "text",
      description: "Emoji to display",
      defaultValue: "🙂", // Default emoji
    },
    className: {
      control: "text",
      description: "Custom class for the wrapper",
    },
    imageClassName: {
      control: "text",
      description: "Custom class for the emoji image",
      defaultValue: "h-[30px]", // Default size for the emoji
    },
  },
};

export default meta;

type Story = StoryObj<typeof SpanMoji>;

// Default story with default emoji
export const Default: Story = {
  args: {
    emoji: "🙂", // Default emoji
  },
};

// Custom emoji with custom wrapper and image size
export const CustomEmoji: Story = {
  args: {
    emoji: "🚀",
    className: "text-2xl text-blue-500", // Custom wrapper class
    imageClassName: "h-[50px]", // Custom image size
  },
};

// Emoji with a different wrapper style
export const CustomWrapper: Story = {
  args: {
    emoji: "🌟",
    className: "font-bold text-lg text-pink-500", // Custom wrapper style
    imageClassName: "h-[40px]", // Custom image size
  },
};

// Multiple emojis in a row for demonstration
export const MultipleEmojis: Story = {
  args: {
    emoji: "😊",
    className: "inline-block mr-2", // Add margin between emojis
    imageClassName: "h-[30px]", // Default image size
  },
  render: (args) => (
    <div className="flex">
      <SpanMoji {...args} emoji="😊" />
      <SpanMoji {...args} emoji="😂" />
      <SpanMoji {...args} emoji="😍" />
    </div>
  ),
};
