import { StoryObj } from "@storybook/react";
import QuantifyText from "../../../../../components/TextNext/QuantifyText";
import SkeletonText from "../../../../../components/TextNext/SkeletonText";

const meta = {
  title: "Sections/PoapSection/QuantifyText",
  component: QuantifyText,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    className: "text-3xl",

    children: (
      <SkeletonText width="4rem">
        <div className="text-slate-500">Quanify Text</div>
      </SkeletonText>
    ),
  },
};
