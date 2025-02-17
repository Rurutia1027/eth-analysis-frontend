import { Meta, StoryFn } from "@storybook/react";
import TestHoverReducerComponent from "./TestHoverReducerComponent";

export default {
 title: "Sections/BurnSection/components/hoverReducer",
 component: TestHoverReducerComponent,
} as Meta;

const Template: StoryFn = (args) => <TestHoverReducerComponent { ...args } />

export const Default = Template.bind({}); 