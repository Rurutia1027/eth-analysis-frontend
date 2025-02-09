import { Meta, StoryObj } from "@storybook/react";
import StyledOverflowList from "../../relay/components/StyledOverflowList";

export default {
  title: "Components/StyledOverflowList",
  component: StyledOverflowList,
  argTypes: {
    height: { control: "text", defaultValue: "h-48" }, // Default height, can be modified in Storybook controls
    children: { control: "text", defaultValue: "Item 1" }, // Default item
  },
} as Meta<typeof StyledOverflowList>;

// Default Story - Scrollable list with height and content
export const Default: StoryObj<typeof StyledOverflowList> = {
  args: {
    height: "h-20", // Fixed height
    children: (
      <>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
        <li>Item 6</li>
        <li>Item 7</li>
        <li>Item 8</li>
      </>
    ),
  },
};

// Story - Custom Height for Scrollable List
export const CustomHeight: StoryObj<typeof StyledOverflowList> = {
  args: {
    height: "h-40", // Custom height
    children: (
      <>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
        <li>Item 6</li>
        <li>Item 7</li>
        <li>Item 8</li>
        <li>Item 9</li>
        <li>Item 10</li>
      </>
    ),
  },
};
