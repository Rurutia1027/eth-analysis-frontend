import React, { useReducer } from "react";
import Image from "next/legacy/image";
import { hoverReducer, initialState } from "../../../../../../components/BurnCategoryWidget/hoverReducer";
import { StaticImageData } from "next/legacy/image";
import blobsSvg from "../../../../../../assets/transfers-slateus.svg";
import cexSvg from "../../../../../../assets/transfers-slateus.svg";
import defiSvg from "../../../../../../assets/transfers-slateus.svg";
import gamingSvg from "../../../../../../assets/transfers-slateus.svg";
import l1Svg from "../../../../../assets/accessibility.svg";
import l1BridgeSvg from "../../../../../assets/accessibility.svg";
import l2Svg from "../../../../../assets/accessibility.svg";
import mevSvg from "../../../../../assets/accessibility.svg";
import miscSvg from "../../../../../assets/accessibility.svg";
import nftSvg from "../../../../../assets/accessibility.svg";
import transfersSvg from "../../../../../assets/accessibility.svg";
import creationsSvg from "../../../../../assets/accessibility.svg";
import woofSvg from "../../../../../assets/accessibility.svg";



type CategoryIndex = keyof typeof initialState;
const categories: CategoryIndex[] = Object.keys(initialState) as CategoryIndex[];

export const categoryIcons: Record<string, StaticImageData> = {
 "blobs": blobsSvg,
 "cex": cexSvg,
 "defi": defiSvg,
 "gaming": gamingSvg,
 "l1": l1Svg,
 "l1-bridge": l1BridgeSvg,
 "l2": l2Svg,
 "mev": mevSvg,
 "misc": miscSvg,
 "nft": nftSvg,
 "transfers": transfersSvg,
 "creations": creationsSvg,
 "woof": woofSvg,
};


const TestHoverReducerComponent: React.FC = () => {
 const [ hoverState, dispatchHover ] = useReducer(hoverReducer, initialState);
 return <div style={ { display: "flex", gap: "20px", flexWrap: "wrap" } }>
  { categories.map((category) => (
   <div
    key={ category }
    onMouseEnter={ () => dispatchHover({ type: "highlight", category }) }
    onMouseLeave={ () => dispatchHover({ type: "unhighlight", category }) }
    style={ {
     padding: "10px 20px",
     borderRadius: "8px",
     cursor: "pointer",
     transition: "background 0.3s ease-in-out",
     backgroundColor: hoverState[ category ] ? "#007bff" : "#ccc",
     color: hoverState[ category ] ? "#fff" : "#000",
     display: "flex",
     alignItems: "center",
     gap: "10px",
    } }
   >
    <Image src={ categoryIcons[ category ] as StaticImageData } alt="" width={ 20 } height={ 20 } />
    <span>{ category }</span>
   </div>
  )) }
 </div>
}

export default TestHoverReducerComponent; 