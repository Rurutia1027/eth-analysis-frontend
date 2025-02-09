import type { Meta, StoryObj } from "@storybook/react";
import Section from "../../components/Section";
import { ReactNode } from "react";

// Define the meta data for the section
const meta: Meta<typeof Section> = {
  title: "Components/Section",
  component: Section,
  args: {
    title: "Welcome to the Section!",
    children: (
      <p>This is a section component showcasing different variations.</p>
    ),
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Section>;

// Default section
export const Default: Story = {
  args: {
    title: "Introduction to Section Component",
    children: <p>This is a simple section with default content.</p>,
  },
};

// Section with highlighted phrase
export const WithHighlight: Story = {
  args: {
    title: "Highlighted Title",
    highlightPhrase: "Important",
    children: (
      <p>This section contains an important highlighted phrase in the title.</p>
    ),
  },
};

// Section with subtitle
export const WithSubtitle: Story = {
  args: {
    title: "Section with Subtitle",
    subtitle: "This is a subtitle for additional context.",
    children: (
      <p>Here we have a section with an additional subtitle below the title.</p>
    ),
  },
};

// Section with link to anchor
export const WithLink: Story = {
  args: {
    title: "Section with Link",
    link: "section-link",
    children: (
      <p>
        Click the title to navigate to this section. It will also show a chain
        link emoji next to the title.
      </p>
    ),
  },
};

// Section with error fallback (simulated error state)
export const ErrorState: Story = {
  args: {
    title: "Error Occurred",
    children: (
      <div>
        <h3>Simulating an error...</h3>
        {/* Simulate an error */}
        {null as any} {/* This will trigger the error boundary */}
      </div>
    ),
  },
};
