import { Meta, StoryObj } from "@storybook/react";
import { FeatureFlagsContext, defaults } from "../../feature-flags";
import {
  PercentAmount,
  MoneyAmount,
  QuantifyTextAnimated,
  AmountBillionsUsdAnimated,
  AmountTrillionsUsdAnimated,
  AmountCompactAnimated,
} from "../../mainsite/components/Amount";

// default values for the stories
const sampleAmount = 1500;
const sampleAmountPostfix = "%";
const sampleUnitText = "ETH";
const skeletonWidth = "3rem";

const meta: Meta = {
  title: "MainSite/Amount Components",
  component: MoneyAmount, // Add the component property here
  decorators: [
    (Story) => (
      <FeatureFlagsContext.Provider value={defaults}>
        <Story />
      </FeatureFlagsContext.Provider>
    ),
  ],
};

export default meta;

export const PercentAmountStory: StoryObj<typeof PercentAmount> = {
  args: {
    children: "50",
    amountPostfix: sampleAmountPostfix,
    skeletonWidth,
  },
};

export const MoneyAmountStory: StoryObj<typeof MoneyAmount> = {
  args: {
    children: "$1500",
    amountPostfix: "$",
    skeletonWidth,
    unitText: sampleUnitText,
  },
};

export const QuantifyTextAnimatedStory: StoryObj<typeof QuantifyTextAnimated> =
  {
    args: {
      children: sampleAmount,
      decimals: 2,
      unit: "eth",
      unitText: sampleUnitText,
      skeletonWidth,
    },
  };

export const AmountBillionsUsdAnimatedStory: StoryObj<
  typeof AmountBillionsUsdAnimated
> = {
  args: {
    children: 1500000000, // Example value in billions
    skeletonWidth,
    className: "text-blue-500",
  },
};

export const AmountTrillionsUsdAnimatedStory: StoryObj<
  typeof AmountTrillionsUsdAnimated
> = {
  args: {
    children: 1500000000000, // Example value in trillions
    skeletonWidth,
    className: "text-blue-500",
  },
};

export const AmountCompactAnimatedStory: StoryObj<
  typeof AmountCompactAnimated
> = {
  args: {
    children: sampleAmount,
    size: "text-xl",
    skeletonWidth,
    unit: "eth",
  },
};
