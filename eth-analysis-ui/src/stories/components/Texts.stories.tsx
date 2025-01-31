import { Meta, StoryObj } from '@storybook/react'; 
import { BaseText } from '../../components/Texts';

const meta: Meta<typeof BaseText> = {
    title: 'Components/BaseText',
    component: BaseText,
    argTypes: {
        children: { control: 'text' },
        className: { control: 'text' },
        color: { control: 'text' },
        font: {
            control: 'select',
            options: ['font-roboto', 'font-inter'], 
        }, 
        inline: { control: 'boolean' },
        lineHeight: { control: 'text' },
        size: { control: 'text' },
        style: { control: 'object' },
        tooltip: { control: 'text' },
        weight: {
            control: 'select',
            optins: ['font-normal', 'font-light', 'font-extralight', 'font-medium'],
        }
    }
}

export default meta; 

type Story = StoryObj<typeof BaseText>; 

export const Default: Story = {
    args: {
        children: 'This is a sample text',
        color: 'text-black',
        font: 'font-roboto',
        inline: true, 
        lineHeight: 'leading-normal',
        size: 'text-base',
        style: {}, 
        tooltip: 'this is a tooltip',
        weight: 'font-light'
    }
}