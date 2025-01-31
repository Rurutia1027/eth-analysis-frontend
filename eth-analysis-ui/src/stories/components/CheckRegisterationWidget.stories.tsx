import { Meta, StoryObj } from "@storybook/react";
import CheckRegistrationWidget from "../../relay/components/CheckRegisterationWidget";
import { WidgetBackground } from "../../components/WidgetSubcomponents";
import Button from "../../components/BlueButton";
import { within } from "@testing-library/react";
import { userEvent } from "@storybook/test";

export default {
  title: "Components/CheckRegisterationWidget",
  component: CheckRegistrationWidget,
  decorators: [
    (Story) => (
      <WidgetBackground className="w-full p-4">
        <Story />
      </WidgetBackground>
    ),
  ],
} as Meta<typeof CheckRegistrationWidget>;

export const Default: StoryObj<typeof CheckRegistrationWidget> = {
  args: {},
};

// export const RegisteredValidator: StoryObj<typeof CheckRegistrationWidget> = {
//   render: () => {
//     return <CheckRegistrationWidget />;
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const input = await canvas.getByPlaceholderText("validator address");
//     const button = await canvas.getByRole("button", { name: /check/i });

//     // Simulate typing and clicking
//     await userEvent.type(input, "validator-address-123");
//     await userEvent.click(button);

//     const statusText = await canvas.getByText(/registered!/i);
//     expect(statusText).toBeVisible();
//   },
// };
