import { FC, Dispatch } from "react";
import { CategoryId } from "../../api/burn-categories";
import { HighlighAction } from "./hoverReducer";
import { BaseText } from "../Texts";

type CategoryRowProps = {
 amountFormatted: string | undefined;
 countFormatted: string | undefined;
 hovering: boolean;
 id: CategoryId;
 link?: string;
 name: string;
 setHovering: Dispatch<HighlighAction>;
 showCategoryCounts: boolean;
};

const CategoryRow: FC<CategoryRowProps> = ({
 amountFormatted, countFormatted,
 hovering, id, name,
 setHovering, showCategoryCounts
}) => (
 <div
  className={ `grid grid-cols-2 ${showCategoryCounts ? "md:grid-cols-3" : ""}` }
  onMouseEnter={ () => setHovering({ type: "highlight", category: id }) }
  onMouseLeave={ () => setHovering({ type: "unhighlight", category: id }) }
  style={ { opacity: hovering ? 0.6 : 1 } }
 >
  <BaseText font="font-inter" size="text-base md:text-lg">
   { name }
  </BaseText>

 </div >
);

export default CategoryRow; 