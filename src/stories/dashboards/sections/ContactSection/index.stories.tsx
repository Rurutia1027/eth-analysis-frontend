import { StoryObj } from "@storybook/react";
import React, { FC, useState } from "react";
import { ContactSection } from "../../../../dashboards/sections/ContactSection";

const meta = {
  title: "Sections/ContactSection",
  component: ContactSection,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};
