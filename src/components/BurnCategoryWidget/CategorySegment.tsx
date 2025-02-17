import { FC } from "react"
import { StaticImageData } from "next/image";
import { CategoryId } from "../../api/burn-categories";
import Image from "next/legacy/image";
import Colors from "../../constants/colors";
import { BaseText } from "../Texts";
import * as Format from "../../utils/format";
import Skeleton from "react-loading-skeleton";

export type CategorySegmentProps = {
 imgAlt: string;
 imgName: { colorOn: StaticImageData; colorOff: StaticImageData };
 onHoverCategory: (hovering: boolean) => void;
 percentOfTotalBurn: number | undefined;
 rounded: "left" | "right";
 showHighlight: boolean;
};

export const activeCategories: CategoryId[] = [
 "nft",
 "l2",
 "mev",
 "defi",
 "transfers",
 "creations",
 "blobs"
];

const alwaysShowImgPercentThreshold = 0.08;
const separatorWidth = 1;
// -1 because separators are in between items, +1 because we add misc.
const separatorCount = activeCategories.length - 1 + 1;
const skeletonLoadingWidth = 0.1;

const CategorySegment: FC<CategorySegmentProps> = ({
 imgAlt,
 imgName,
 onHoverCategory,
 percentOfTotalBurn,
 rounded,
 showHighlight,
}) => (
 <div
  className="flex flex-col items-center select-none"
  style={ {
   width: `calc(${(percentOfTotalBurn ?? 0.1) * 100}% - 
   ${separatorWidth * separatorCount}px)`
  } }
  onMouseEnter={ () => onHoverCategory(true) }
  onMouseLeave={ () => onHoverCategory(false) }
 >

  <Image
   className="relative w-6"
   height={ 21 } width={ 21 } src={ imgName.colorOff }
   alt={ imgAlt } style={ {
    height: "21px",
    marginBottom: "12px",
    visibility:
     percentOfTotalBurn === undefined
      ? "hidden"
      : percentOfTotalBurn < alwaysShowImgPercentThreshold
       ? "hidden"
       : "visible",
   } } />
  <Image
   className="absolute w-6"
   height={ 21 }
   width={ 21 }
   src={ imgName.colorOn }
   alt="colored ice crystal, signifying staked ETH"
   style={ {
    height: "21px",
    marginBottom: "12px",
    visibility:
     percentOfTotalBurn === undefined
      ? "hidden"
      : showHighlight
       ? "visible"
       : "hidden",
   } }
  />

  <div
   className={ `color-animation h-2 w-full bg-slateus-200 ${rounded === "left"
    ? "rounded-l-full"
    : rounded === "right"
     ? "rounded-r-full"
     : ""
    }` }
   style={ {
    backgroundColor: showHighlight ? Colors.white : Colors.slateus200,
   } }
  ></div>
  <div style={ { marginTop: "9px" } }>
   { percentOfTotalBurn === undefined ? (
    <Skeleton width="1.5rem" />
   ) : (
    <BaseText
     font="font-roboto"
     className={ `color-animation ${!showHighlight && percentOfTotalBurn < alwaysShowImgPercentThreshold
      ? "invisible"
      : "visible"
      }` }
     style={ {
      color: showHighlight ? Colors.white : Colors.slateus200,
     } }
    >
     { Format.formatZeroDecimals(
      (percentOfTotalBurn ?? skeletonLoadingWidth) * 100,
     ) }
     %
    </BaseText>
   ) }
  </div>
 </div>
);

export default CategorySegment; 