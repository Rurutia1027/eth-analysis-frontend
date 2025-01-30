import type { Meta, StoryObj } from '@storybook/react'; 
import Accordion from '../components/Accordion';
import { action } from '@storybook/addon-actions';
import { within } from '@storybook/test';

import BodyText from "../components/TextNext/BodyText";
import Twemoji from "../components/Twemoji";
import styles from "./Accordion.module.scss";


// Meta information for the story 
const meta: Meta<typeof Accordion> = {
    // this will be shown under the folder of Components 
    title: 'Components/Accordion', 

    // create a reference to the Accordion in this project 
    component: Accordion,

    // this enable the documentation auto-generation 
    tags: ['autodocs'],

    // arguments for Accordion's init parameters 
    // defined from the 
    /**
     * type AccorionProps = {
     *   title: string; 
     *   text: string; 
     * }
     * 
     * const Accordion: React.FC<AccordionProps> = ({title, text}) => {...}
    */
    argTypes: {
        title: { control: 'text' },
        text: {control: 'text'},
    }
}

export default meta; 

type Story = StoryObj<typeof Accordion>; 

// default story 
export const Default: Story = {
    args: {
        title: 'Accordion Title',
        text: 'This is the content of the accordion. It can contain multiple lines and useful informaiton.'
    }
}


export const LongContent: Story = {
  args: {
    title: "This is a very long accordion title that will test the layout and how it wraps around on different screen sizes",
    text: `This is a very long content for the accordion. It should demonstrate how the accordion handles large amounts of text. 
        It can have multiple paragraphs and details. For example, we can talk about various concepts here. Maybe some technical details, 
        like how a particular algorithm works or how a software system is designed. We can also mention some real-world use cases and 
        benefits of using such a system. Overall, it's a comprehensive description that should show the flexibility of the accordion component.`,
  },
  play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      const accordionItem = canvas.getByRole('accordion'); 
      await expect(accordionItem).toBeInTheDocument(); 
  },
};