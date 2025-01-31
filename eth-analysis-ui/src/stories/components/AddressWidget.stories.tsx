import type { Meta, StoryObj } from "@storybook/react";
import AddressWidget from "../../relay/components/AddressWidget";
import { WidgetBackground } from "../../components/WidgetSubcomponents";
import { within } from "@storybook/test";
import { userEvent } from "@storybook/test";

const meta: Meta<typeof AddressWidget> = {
  title: "Components/AddressWidget",
  component: AddressWidget,
  decorators: [
    (Story) => (
      <WidgetBackground className="p-4">
        <Story />
      </WidgetBackground>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof AddressWidget>;

export const Default: Story = {
  render: () => {
    return <AddressWidget />;
  },
};

export const CopiedState: Story = {
  render: () => {
    return <AddressWidget />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const copyButton = await canvas.getByRole("button", { name: /copy/i });
    await userEvent.click(copyButton);
  },
};
