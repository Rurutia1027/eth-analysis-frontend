import { Meta, StoryObj } from "@storybook/react";
import SectionDivider from "../../components/SectionDivider";

const meta: Meta<typeof SectionDivider> = {
  title: "Components/SectionDivider",
  component: SectionDivider,
  argTypes: {
    link: { control: "text" },
    subtitle: { control: "text" },
    title: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof SectionDivider>;

// Default story with all props
export const Default: Story = {
  args: {
    title: "Main Section Divider",
    subtitle: "This is a subtitle for this section",
    link: "https://ultrasound.money/",
  },
};

// Story with only title
export const TitleOnly: Story = {
  args: {
    title: "Main Section Title Only",
  },
};

// Story with subtitle and no link
export const SubtitleOnly: Story = {
  args: {
    title: "Section with Subtitle Only",
    subtitle: "This section has a subtitle, but no link",
  },
};

// Story with link only
export const LinkOnly: Story = {
  args: {
    title: "Section with Link Only",
    link: "https://ultrasound.money/",
  },
};

// Story with a large title
export const LargeTitle: Story = {
  args: {
    title: "This is a very long section title to test the layout and responsiveness of the divider component",
    subtitle: "Testing large title handling",
    link: "https://ultrasound.money/",
  },
};