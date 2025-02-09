import { Meta, StoryObj } from "@storybook/react"; 
import Twemoji from "../../components/Twemoji";
import { ca } from "date-fns/locale";

const meta: Meta<typeof Twemoji> = {
    title: "Components/Twemoji",
    component: Twemoji,
    tags: ['autodocs'],
    argTypes: {
        children: { control: "text" },
        className: { control: "text" },
        imageClassName: { control: "text" },
        wrapper: { control: "boolean" }, 
        tag: {
            control: "select",
            options:["div", "span", "p", "h1", "h2", "h3"], 
        }
    }
}

export default meta; 

type Story = StoryObj<typeof Twemoji>; 

export const Default: Story = {
    args: {
        children: "😀 Twemoji Example",
        wrapper: true, 
        tag: "div",
        className: "text-lg text-blue-600",
        imageClassName: "h-6 w-6"
    }
}

export const WithoutWrapper: Story = {
    args: {
        children: "🔥 No Wrapper Example",
        wrapper: false, 
        className: "text-red-500",
        imageClassName: "h-6 w-6",
    }
}

export const CustomTag: Story = {
    args: {
        children: "💡 Render as a paragraph",
        wrapper: true, 
        tag: "p",
        className: "text-yellow-500",
        imageClassName: "h-6 w-6"
    }
}

export const DynamicContent: Story = {
    args: {
        children: "🔥 Dynamic Test",
    },
    play: async ({ canvasElement }) => { 
        const container = canvasElement.querySelector("div"); 
        if (container) { 
            console.log("container not null"); 
            container.innerHTML = "😂 Updated Emoji"; 
        }
    }
}
