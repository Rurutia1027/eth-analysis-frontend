import { StoryObj } from "@storybook/react";
import CustomAccordion from "../../components/Accordion";

const meta = {
  title: "Components/Accordion",
  component: CustomAccordion,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    title: "Accordion Title",
    text: "This is the content of the accordion. It can contain multiple lines and useful informaiton.",
  },
};
