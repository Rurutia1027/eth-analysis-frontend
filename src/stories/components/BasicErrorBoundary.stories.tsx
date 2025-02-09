import { Meta, StoryObj } from "@storybook/react";
import BasicErrorBoundary, {
  Fallback,
} from "../../components/BasicErrorBoundary";
import { useState } from "react";

// Example of a component that will throw an error
const ThrowErrorComponent = () => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    throw new Error("Simulated error!");
  }

  return (
    <div>
      <button onClick={() => setHasError(true)}>Throw Error</button>
    </div>
  );
};

export default {
  title: "Components/ErrorBoundary",
  component: BasicErrorBoundary,
} as Meta<typeof BasicErrorBoundary>;

// Story - Simulate Error within the boundary
export const Default: StoryObj<typeof BasicErrorBoundary> = {
  render: () => (
    <BasicErrorBoundary>
      <ThrowErrorComponent />
    </BasicErrorBoundary>
  ),
};

export const FallbackUI: StoryObj<typeof Fallback> = {
  render: () => <Fallback />,
};
