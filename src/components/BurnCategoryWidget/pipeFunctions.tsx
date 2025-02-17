import { A, flow, N, O, OAlt, OrdM, pipe, RA, Record } from "../../utils/fp";
import { CategoryProps } from "./CategorySegmentItem";

export const sortByFeesDesc = pipe(
 N.Ord,
 OrdM.reverse,
 OrdM.contramap((category: CategoryProps) => category.fees ?? 0),
);