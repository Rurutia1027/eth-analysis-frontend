import { Meta, StoryObj } from '@storybook/react'; 
import { AdminTokenDisplayUI } from './AdminTokenDisplayUI';

export default {
    title: "Hooks/AdminTokenDisplayUI",
    component: AdminTokenDisplayUI
} as Meta; 

export const Default: StoryObj = {
    render: () => { 
        window.history.pushState({}, "Test", "?admin-token=storybook123"); 
        return <AdminTokenDisplayUI/>
    }
}