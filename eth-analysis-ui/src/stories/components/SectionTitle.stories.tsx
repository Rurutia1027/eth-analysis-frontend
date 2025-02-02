import type { Meta, StoryObj } from "@storybook/react";
import { SectionTitle } from "../../components/TextNext/SectionTitle";

const meta = {
  title: "Components/SectionTitle",
  component: SectionTitle,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SectionTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is the section title",
    subtitle: "This is a subtitle for the section",
  },
};

export const WithHighlightPhrase: Story = {
  args: {
    children: "This is the section title with highlighted phrase",
    highlightPhrase: "Highlighted phrase", // option param
    highlightGradient: "bg-gradient-to-tr from-yellow-500 to-pink-500",
    subtitle: "This is a subtitle with a highlighted phrase.",
  },
};

export const WithLink: Story = {
  args: {
    children: "This is the section title with a link",
    link: "section-anchor",
    subtitle: "This section title has a link icon",
  },
};

export const WithoutSubtitle: Story = {
  args: {
    children: "This section title has no subtitle.",
    className: "text-center text-black-300",
  },
};

export const WithCustomClass: Story = {
  args: {
    children: "This is the section title with a custom class.",
    className: "text-center text-emeraled-500",
    subtitle: "A subtitle with custom styles.",
  },
};
