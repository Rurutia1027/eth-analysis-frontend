import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import FaqBlock from "../../relay/sections/FaqSection";
import {
  NavigationContext,
  INavigationContext,
} from "../../contexts/NavigationContext";
import Accordion from "../../components/Accordion";

/* eslint-disable @typescript-eslint/no-empty-function */
const fullNavigationContext: INavigationContext = {
  hidingNavigationPosition: 0,
  changeHidingNavigationPosition: (value: number) => {
    console.log(`Changing hidingNavigationPosition to ${value}`);
  },
  faqPosition: 0,
  changeFaqPosition: (value: number) => {
    console.log(`Changing faqPosition to ${value}`);
  },
};

export default {
  title: "Components/FaqBlock",
  component: FaqBlock,
  decorators: [
    (Story) => (
      <NavigationContext.Provider value={fullNavigationContext}>
        <Story />
      </NavigationContext.Provider>
    ),
  ],
} as Meta;

export const Default: StoryObj = {
  render: () => <FaqBlock />,
};

export const MultipleFaqItems: StoryObj = {
  render: () => {
    const mockCopy = [
      {
        question: "What is React?",
        answer: "React is a JavaScript library for building user interfaces.",
      },
      {
        question: "What is Storybook?",
        answer:
          "Storybook is an open-source tool for developing UI components in isolation.",
      },
      {
        question: "What is Tailwind CSS?",
        answer:
          "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.",
      },
      {
        question: "What is TypeScript?",
        answer:
          "TypeScript is a strongly typed programming language that builds on JavaScript.",
      },
      {
        question: "What is Jest?",
        answer:
          "Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase.",
      },
    ];

    return (
      <NavigationContext.Provider value={fullNavigationContext}>
        <section className="mt-64" id="faq">
          <div className="w-full px-4 md:px-8 lg:px-0">
            {mockCopy.map((item, index) => (
              <div key={index}>
                <Accordion title={item.question} text={item.answer} />
                <div
                  className="w-full bg-slateus-400"
                  style={{ height: "1px", opacity: "0.3" }}
                />
              </div>
            ))}
          </div>
        </section>
      </NavigationContext.Provider>
    );
  },
};
