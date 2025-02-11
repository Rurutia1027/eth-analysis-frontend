import { StoryObj } from "@storybook/react";
import React, { FC, useState } from "react";
import twitterSvg from "../../../../../assets/twitter-slateus.svg";
import githubSvg from "../../../../../assets/github-slateus.svg";
import emailSvg from "../../../../../assets/email-slateus.svg";
import type { StaticImageData } from "next/image";
import { Contact } from "../../../../../dashboards/sections/ContactSection";

const meta = {
  title: "Sections/ContactSection/components/Contact",
  component: Contact,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const TwitterContact: Story = {
  args: {
    alt: "twitter logo",
    imageSrc: twitterSvg as StaticImageData,
    href: "mailto:contact@ultrasound.money",
    children: "contact@ultrasound.money",
  },
};

export const GitHubContact: Story = {
  args: {
    alt: "github logo",
    imageSrc: twitterSvg as StaticImageData,
    href: "https://github.com/ultrasoundmoney/frontend",
    children: "GitHub repo",
  },
};

export const EmailContact: Story = {
  args: {
    alt: "email address",
    imageSrc: twitterSvg as StaticImageData,
    href: "mailto:contact@ultrasound.money",
    children: "contact@ultrasound.money",
  },
};
