import { Meta, StoryObj } from "@storybook/react";
import withBasicErrorBoundary from "../../../mainsite/higher-order-components/WithBasicErrorBoundary";
import ErrorThrowingComponent from "./ErrorThrowingComponent";

const WrappedComponent = withBasicErrorBoundary(ErrorThrowingComponent);

const meta: Meta<typeof WrappedComponent> = {
  title: "MainSite/withBasicErrorBoundary",
  component: WrappedComponent,
};

export default meta;

type Story = StoryObj<typeof WrappedComponent>;

export const Default: Story = {
  render: () => <WrappedComponent />,
};
