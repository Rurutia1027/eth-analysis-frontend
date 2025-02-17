import { CategoryProps } from "../../dashboards/sections/BurnSection";
import { A, flow, N, O, OAlt, OrdM, pipe, RA, Record } from "../../utils/fp";
import { BurnCategories, BurnCategory } from "../../api/burn-categories";
import { TimeFrame } from "../../utils/time-frames";

// svgs
import questionMarkOwn from "../../assets/question-mark-own.svg";
import questionMarkSlateus from "../../assets/question-mark-slateus.svg";

export const sortByFeesDesc = () =>
  pipe(
    N.Ord,
    OrdM.reverse,
    OrdM.contramap((category: CategoryProps) => category.fees ?? 0),
  );
