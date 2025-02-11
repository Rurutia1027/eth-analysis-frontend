import { StoryObj } from "@storybook/react";
import React, { FC, useState } from "react";
import DefaultTextLink from "../../../../../components/DefaultTextLink";
import { userEvent, within } from "@storybook/test";

const meta = {
  title: "Sections/ContactSection/components/DefaultTextLink",
  component: DefaultTextLink,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    className: "flex items-center gap-x-2",
    href: "#",
    children: "DefaultTextLink",
  },
  argTypes: {
    onMouseEnter: { action: "Hovered Over" },
    onMouseLeave: { action: "Hovered Out" },
  },
};

export const HoverWithControls: Story = {
  args: {
    children: "DefaultTextLinke HoverWithControls",
    href: "#",
    className: "text-gray-800",
  },
  argTypes: {
    className: { control: "text" },
    onMouseEnter: { action: "Hover Over" },
    onMouseLeave: { action: "Hover Out" },
  },
};

export const InteractiveHover: Story = {
  args: {
    children: "DefaultTextLink: InteractiveHover",
    href: "#",
  },
  argTypes: {
    onMouseEnter: { action: "Hovered Over" },
    onMouseLeave: { action: "Hovered Out" },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const linkElement = canvas.getByText("DefaultTextLink: InteractiveHover");

    // simulate hover
    await userEvent.hover(linkElement);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // simulate unhover
    await userEvent.unhover(linkElement);
  },
};
