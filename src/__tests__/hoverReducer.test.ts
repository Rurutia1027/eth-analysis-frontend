import {
  hoverReducer,
  initialState,
  HighlighAction,
} from "../components/BurnCategoryWidget/hoverReducer";

describe("hoverReducer", () => {
  it("should highlight a category", () => {
    const action: HighlighAction = { type: "highlight", category: "defi" };
    const newState = hoverReducer(initialState, action);
    expect(newState["defi"]).toBe(true);
  });

  it("should unhighlight a category", () => {
    const actionHighlight: HighlighAction = {
      type: "highlight",
      category: "nft",
    };
    const stateAfterHighlight = hoverReducer(initialState, actionHighlight);
    const actionUnhighlight: HighlighAction = {
      type: "unhighlight",
      category: "nft",
    };
    const stateAfterUnHighlight = hoverReducer(
      stateAfterHighlight,
      actionUnhighlight,
    );
    expect(stateAfterUnHighlight["nft"]).toBe(false);
  });
 
 it("should not mutate the previous state", () => {
   const prevState = { ...initialState };
   const action: HighlighAction = { type: "highlight", category: "defi" };
   hoverReducer(prevState, action);
   expect(prevState["defi"]).toBe(true);
 });
});
