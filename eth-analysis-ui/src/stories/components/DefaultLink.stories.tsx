import React, { useState } from "react";
import { Meta, StoryObj } from '@storybook/react'; 
import DefaultLink from "../../components/DefaultLink";
import { cons } from "fp-ts/lib/ReadonlyNonEmptyArray";

const meta: Meta<typeof DefaultLink> = {
    title: 'Components/DefaultLink',
    component: DefaultLink,
    argTypes: {
        onMouseEnter: { action: 'mouse enter' },
        onMouseLeave: { action: 'mouse leave'},
    }
}; 

export default meta; 

type Story = StoryObj<typeof DefaultLink>; 

export const Default: Story = {
    args: {
        children: 'Click Me',
        href: 'https://ultrasound.money/', 
        className: 'text-blue-500'
    }
}

export const NoHref: Story = {
    args: {
        children: 'No Href',
        href: '#',
        className: 'text-center text-gray-500'
    }
}

export const CustomClasses: Story = {
    args: {
        children: 'Custom Classes',
        href: 'https://ultrasound.money/',
        className: 'text-green-500 hover:underline'
    }
}


export const HoverEffects: Story = {
    args: {
        children: 'Hover Effect',
        href: 'https://ultrasound.money/',
        className: 'text-red-500',
        onMouseEnter: () => console.log('Mouse entered'),
        onMouseLeave:() => console.log('Mouse left')
    }
}

export const MouseHoverEffect: Story = {
    args: {
        children: 'Mouse Hover Effect',
        href: 'https://ultrasound.money/',
        className: 'text-red-500', 
        onMouseEnter: () => console.log('mouse entered'),
        onMouseLeave: () => console.log('mouse left')
    }, 
    render: (args) => { 
        const [tooltip, setToolTip] = useState<string | null>(null); 

        // display the tooktip with log messages 
        const handleMouseEnter = () => { 
            setToolTip('Mouse entered'); 
            args.onMouseEnter?.(); 
        }

        const handleMouseleave = () => { 
            setToolTip('Mouse left'); 
            args.onMouseLeave?.(); 
        }

        return (
            <div className="relative inline-black">
                <DefaultLink {...args}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseleave} />
                {tooltip && 
                    <div className="absolute left-0 top-full mt-2 p-2 text-xs bg-black text-white rounded">
                        {tooltip}
                    </div>
                }
            </div>
        )
    }
}