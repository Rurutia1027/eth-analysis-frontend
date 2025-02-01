import { Meta, StoryObj } from "@storybook/react";
import SkeletonText from "../../components/TextNext/SkeletonText";
import { FeatureFlagsContext, defaults } from "../../feature-flags";
import BlueButton from "../../components/BlueButton";

// Mocking the FeatureFlagsContext
const mockContextValue = {
  ...defaults,
  previewSkeletons: false, // Set to false if you want to simulate the absence of skeleton loading
};

export default {
  title: "Components/SkeletonText",
  component: SkeletonText,
  decorators: [
    (Story) => (
      <FeatureFlagsContext.Provider value={mockContextValue}>
        <Story />
      </FeatureFlagsContext.Provider>
    ),
  ],
  argTypes: {
    children: { control: "text" },
    className: { control: "text" },
    inline: { control: "boolean" },
    width: { control: "text" },
  },
} as Meta<typeof SkeletonText>;

// Default Story - With Skeleton
export const Default: StoryObj<typeof SkeletonText> = {
  args: {
    children: <h1>Default Skeleton Text</h1>,
    className: "text-gray-500",
    inline: true,
    width: "100%",
  },
};

// Story - With Actual Content
export const WithContent: StoryObj<typeof SkeletonText> = {
  args: {
    children: "This is some loaded content!",
    className: "text-blue-500",
    inline: false,
    width: "auto",
  },
};

// Story - Custom Width
export const CustomWidth: StoryObj<typeof SkeletonText> = {
  args: {
    children: <BlueButton children="click" />,
    className: "text-gray-300",
    inline: true,
    width: "200px",
  },
};
