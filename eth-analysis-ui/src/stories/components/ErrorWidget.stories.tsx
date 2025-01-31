import { Meta, StoryObj } from "@storybook/react";
import { ErrorWidget } from "../../components/ErrorWidget";

const meta: Meta<typeof ErrorWidget> = {
  title: "Components/ErrorWidget",
  component: ErrorWidget,
  tags: ['autodocs'],
  argTypes: {
    title: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof ErrorWidget>;

// Default story with a general error message
export const Default: Story = {
  args: {
    title: "Critical Error",
  },
};

// Story with a custom error title
export const CustomTitle: Story = {
  args: {
    title: "Database Connection Failed",
  },
};

// Story with a very short title
export const ShortTitle: Story = {
  args: {
    title: "Error",
  },
};

// Story with a long title
export const LongTitle: Story = {
  args: {
    title: "Database Connection Timeout: Could not establish a connection to the server within the timeout period",
  },
};

// Story with no title (edge case)
export const NoTitle: Story = {
  args: {
    title: "",
  },
};