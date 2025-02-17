import { FC } from "react";
import { StaticImageData } from "next/image";
import { CategoryId } from "../../api/burn-categories";
import CategorySegment from "./CategorySegment";

export type CategoryProps = {
 id: CategoryId;
 fees: number | undefined;
 feesUsd: number | undefined;
 transactionCount: number | undefined;
 percentOfTotalBurn: number | undefined;
 percentOfTotalBurnUsd: number | undefined;
 imgAlt: string;
 imgName: { colorOn: StaticImageData; colorOff: StaticImageData };
 onHoverCategory: (hovering: boolean) => void;
 showHighlight: boolean;
};

// the reason to create CategorySetment as a isolated elements is beacause
// The authors want to add separators in between the categories, but not at the end. 
// Try to use a fragment to create one mixed list of seprators and categories -- but caused key errors, 
// so they wrap the contents by a element instead. 
const CategorySegmentItem: FC<{
 categoryProps: CategoryProps;
 isFirst: boolean;
 isLast: boolean;
}> = ({ categoryProps, isFirst, isLast }) => (

 <>
  <CategorySegment
   rounded={ isFirst ? "left" : "right" }
   { ...categoryProps }
  />
  { !isLast && <div className="z-10 w-0.5 h-2 bg-slateus-500"></div> }
 </>
)

export default CategorySegmentItem; 