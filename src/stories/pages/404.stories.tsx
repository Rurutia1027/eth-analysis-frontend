import { within, userEvent, expect } from "@storybook/test";
import Custom404 from "../../pages/404";
import { StoryObj } from "@storybook/react";

const meta = {
  title: "Pages/404",
  component: Custom404,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const LinkClicked: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Find the link by text or rule
    const link = canvas.getByRole("link", { name: /ultrasound\.money/i });

    // Verify the link is in the document
    await expect(link).toBeInTheDocument();

    // Simulate a user clicking the link
    await userEvent.click(link);

    // Verify that the link is pointing to the correct URL
    await expect(link).toHaveAttribute("href", "https://ultrasound.money/");
  },
};
