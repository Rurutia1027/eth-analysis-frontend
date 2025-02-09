import { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import FaqBlock from "../../mainsite/components/Faq";
import {
  NavigationContext,
  NavigationProvider,
} from "../../contexts/NavigationContext"; // Use the refined context

// Mock translations context (no changes needed)
const mockTranslations = {
  faq_question_1: "What is this platform?",
  faq_answer_1: "This platform allows users to interact with various tools.",
  faq_question_2: "How do I use it?",
  faq_answer_2: "You can start by signing up and exploring the dashboard.",
  faq_question_3: "Is it free?",
  faq_answer_3: "Yes, we offer a free tier.",
  faq_question_6: "Where can I get support?",
  faq_answer_6: "You can contact our support team from the contact page.",
  faq_question_7: "How do I integrate with other services?",
  faq_answer_7: "We provide detailed documentation on integrations.",
  faq_question_8: "Is there a mobile app?",
  faq_answer_8: "Yes, the mobile app is available on iOS and Android.",
  faq_question_9: "How secure is my data?",
  faq_answer_9:
    "We prioritize data security and follow industry best practices.",
};

const meta: Meta<typeof FaqBlock> = {
  title: "MainSite/FaqBlock",
  component: FaqBlock,
  decorators: [
    (Story) => (
      <div style={{ padding: "20px", backgroundColor: "#001f3d" }}>
        <NavigationProvider>
          <Story />
        </NavigationProvider>
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof FaqBlock>;

export const Default: Story = {
  args: {},
};

export const WithFAQPositionTracking: Story = {
  args: {
    faqPosition: 0,
    changeFaqPosition: (value: number) => {
      console.log("FAQ position updated:", value);
    },
  },

  render: (args) => {
    const [faqPosition, setFaqPosition] = useState<number>();

    return (
      <NavigationContext.Provider
        value={{
          hidingNavigationPosition: 0,
          changeHidingNavigationPosition: (value: number) => {
            console.log("Hiding Navigation position updated:", value);
          },
          faqPosition: 0,
          changeFaqPosition: (value: number) => value,
        }}
      >
        <FaqBlock />
      </NavigationContext.Provider>
    );
  },
};
