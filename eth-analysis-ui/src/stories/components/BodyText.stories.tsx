import type { Meta, StoryObj } from '@storybook/react'
import BodyText from '../../components/TextNext/BodyText';

const meta = {
    title: 'Components/BodyText',
    component: BodyText, 
    parameters: {
        layout: 'centered'
    }, 
 }  satisfies Meta<typeof BodyText>

export default meta; 
type Story = StoryObj<typeof meta>; 

export const Default: Story = {
    args: {
        children: 'This is some body text'
    }
}