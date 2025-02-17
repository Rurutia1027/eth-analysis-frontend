import { CategoryId } from "../../api/burn-categories";

export type HighlighAction = {
 type: "highlight" | "unhighlight";
 category: CategoryId;
};

export const initialState: Record<CategoryId, boolean> = {
 "l1-bridge": false,
 cex: false,
 defi: false,
 gaming: false,
 l1: false,
 l2: false,
 mev: false,
 misc: false,
 nft: false,
 transfers: false,
 creations: false,
 blobs: false,
 woof: false,
};

export const hoverReducer = (
 state: Record<CategoryId, boolean>,
 action: HighlighAction,
): Record<CategoryId, boolean> => {
 switch (action.type) {
  case "highlight":
   // only update the action correspoinding's category's highlight status 
   return { ...state, [ action.category ]: true };
  case "unhighlight":
   return { ...state, [ action.category ]: false };
  default:
   console.log("not matching action type: ", action.type);
   return state;
 }
}; 