import { A, flow, N, O, OAlt, OrdM, pipe, RA, Record } from "../../utils/fp";
import { CategoryProps } from "./CategorySegmentItem";
import * as Format from "../../utils/format";
import { WEI_PER_ETH } from "../../constants/eth-units";


export const sortByFeesDesc = pipe(
 N.Ord,
 OrdM.reverse,
 OrdM.contramap((category: CategoryProps) => category.fees ?? 0),
);


export const formatFees = (num: number | undefined): string | undefined =>
 num === undefined
  ? undefined
  : flow((num: number) => num / WEI_PER_ETH, Format.formatZeroDecimals)(num);

export const formatCount = (num: number | undefined): string | undefined =>
 num === undefined
  ? undefined
  : flow(
   (num: number) => num / 10 ** 3,
   (num) => Format.formatOneDecimal(num) + "K",
  )(num);