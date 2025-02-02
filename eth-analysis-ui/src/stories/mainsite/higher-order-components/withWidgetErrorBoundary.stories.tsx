import { Meta, StoryObj } from "@storybook/react";
import withWidgetErrorBoundary from "../../../mainsite/higher-order-components/WithWidgetErrorBoundary";
import ErrorThrowingWidget from "./ErrorThrowingWidget";

const WrappedComponent = withWidgetErrorBoundary(
  "Test Widget",
  ErrorThrowingWidget,
);

const meta: Meta<typeof WrappedComponent> = {
  title: "MainSite/withWidgetErrorBoundary",
  component: WrappedComponent,
};

export default meta;

type Story = StoryObj<typeof WrappedComponent>;

export const Default: Story = {
  render: () => <WrappedComponent />,
};
