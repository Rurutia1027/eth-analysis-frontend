import { Meta, StoryObj } from "@storybook/react";
import ImageWithTooltip from "../../mainsite/components/ImageWithTooltip";
import { FeatureFlagsContext, defaults } from "../../feature-flags";

const sampleImageUrl = "../../../src/assets/bat/Ethereum_UltraSoundBat@3x.png";

const meta: Meta<typeof ImageWithTooltip> = {
  title: "MainSite/ImageWithTooltip",
  component: ImageWithTooltip,
  decorators: [
    (Story) => (
      <FeatureFlagsContext.Provider value={defaults}>
        <Story />
      </FeatureFlagsContext.Provider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ImageWithTooltip>;

export const Default: Story = {
  args: {
    imageUrl: sampleImageUrl,
    height: 100,
    width: 100,
    isDoneLoading: true,
    skeletonDiameter: "20px",
  },
};

export const WithSkeleton: Story = {
  args: {
    imageUrl: sampleImageUrl,
    height: 100,
    width: 100,
    isDoneLoading: true,
  },
};

export const ErrorState: Story = {
  args: {
    imageUrl: "invalid-url", // Invalid image URL will trigger onError
    height: 100,
    width: 100,
    isDoneLoading: true,
  },
};
