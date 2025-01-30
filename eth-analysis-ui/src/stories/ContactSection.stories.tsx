import type { Meta, StoryFn } from "@storybook/react";
import ContactSection from "../sections/ContactSection";
import type { ContactProps } from '../sections/ContactSection'; 
import exampleSvg from "./assets/accessibility.svg"
import { StaticImageData } from "next/image";

// Default export for Storybook
const meta: Meta<typeof ContactSection> = {
  title: "Components/ContactSection", // Storybook folder structure
  component: ContactSection,
};

export default meta;

// Template to render ContactSection
const Template: StoryFn<typeof ContactSection> = () => <ContactSection />;

// type Story = StoryObject<typeof meta>

// Default story for ContactSection
export const Default = Template.bind({});

// Custom Story for individual Contact props (optional)
const contactExample: ContactProps = {
  alt: "example icon",
  imageSrc: exampleSvg as StaticImageData,
  href: "https://example.com",
  children: "Example Contact",
};

export const CustomContact = () => (
  <div className="p-4">
    <ContactSection />
    {/* Example usage of a single Contact */}
    {/* <Contact {...contactExample} /> */}
  </div>
);