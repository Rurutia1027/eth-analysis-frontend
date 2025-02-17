import { StoryObj } from "@storybook/react";
import { TimeFrame } from "../../../../../utils/time-frames";
import CategoryRow from "../../../../../components/BurnCategoryWidget/CategoryRow";
import { CategoryId } from "../../../../../api/burn-categories";
import { hoverReducer, initialState } from "../../../../../components/BurnCategoryWidget/hoverReducer";
import { useReducer } from "react";

const meta = {
 title: "Sections/BurnSection/components/CategoryRow",
 component: CategoryRow,
 parameters: {
  layout: "fullscreen",
 },
};

export default meta;
type Story = StoryObj<typeof meta>;

// here we init the function allocated to setHovering 
// Create a wrapper component to initialize `useReducer` properly
const CategoryRowWrapper = (props: any) => {
 const [ hoverState, dispatchHover ] = useReducer(hoverReducer, initialState);

 return <div style={ { color: "black" } }>
  <CategoryRow { ...props } setHovering={ dispatchHover } className="text-black" />
 </div>
};


export const Default: Story = {
 args: {
  amountFormatted: "456789232332.343",
  countFormatted: "456789232332.324546756",
  hovering: true,
  id: "defi" as CategoryId,
  link: "#",
  name: "name of CategoryRow in StoryBook",
  setHovering: () => { },
  showCategoryCounts: true,
 },
 render: (args) => <CategoryRowWrapper  { ...args } />
};

