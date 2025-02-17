import { FC, useContext, useMemo, useReducer } from 'react';
import { BurnCategory, CategoryId, useBurnCategories } from '../../api/burn-categories'
import { OnClick } from '../TimeFrameControl'
import { TimeFrame, timeFrames } from '../../utils/time-frames';
import { A, flow, N, O, OAlt, OrdM, pipe, RA, Record } from "../../utils/fp";
import { useGroupedAnalysis1 } from '../../api/grouped-analysis-1';
import { Leaderboards } from '../../api/leaderboards';
import { fetchBurnSums } from '../../api/burn-sums';
import { hoverReducer, initialState } from './hoverReducer';
import { FeatureFlagsContext } from '../../contexts/FeatureFlagContext';
import CategorySegmentItem, { CategoryProps } from './CategorySegmentItem';
import { formatCount, formatFees, sortByFeesDesc } from './pipeFunctions';
import { categoryDisplayMap } from '../../api/burn-categories';
import { StaticImageData } from 'next/image';
import LabelText from '../TextNext/LabelText';

// imported svg images 
import questionMarkSlateus from "../../assets/question-mark-slateus.svg";
import questionMarkOwn from "../../assets/question-mark-own.svg";
import paletteSlateus from "../../assets/palette-slateus.svg";
import paletteOwn from "../../assets/palette-own.svg";
import robotSlateus from "../../assets/robot-slateus.svg";
import robotOwn from "../../assets/robot-own.svg";
import moneyWingsSlateus from "../../assets/money-wings-slateus.svg";
import moneyWingsOwn from "../../assets/money-wings-own.svg";
import dotsSlateus from "../../assets/dots-slateus.svg";
import dotsOwn from "../../assets/dots-own.svg";
import transfersSlateus from "../../assets/transfers-slateus.svg";
import transfersOwn from "../../assets/transfers-own.svg";
import chainsSlateus from "../../assets/chains-slateus.svg";
import chainsOwn from "../../assets/chains-own.svg";
import copySlateus from "../../assets/copy-slateus.svg";
import copyOwn from "../../assets/copy-own.svg";
import bridgeSlateus from "../../assets/bridge-slateus.svg";
import bridgeOwn from "../../assets/bridge-own.svg";
import chartSlateus from "../../assets/chart-slateus.svg";
import chartOwn from "../../assets/chart-own.svg";
import mdBubbleChartOwn from "../../assets/md-bubble-chart-own.svg";
import mdBubbleChartSlateus from "../../assets/md-bubble-chart-slateus.svg";
import { timeframeFeesBurnedMap } from '../BlobBurnWidget';
import { activeCategories } from './CategorySegment';
import BurnGroupBase from '../BurnGroupBase';
import CategoryRow from './CategoryRow';


export const leaderboardKeyFromTimeFrame: Record<
 TimeFrame,
 keyof Leaderboards
> = {
 m5: "leaderboard5m",
 h1: "leaderboard1h",
 d1: "leaderboard24h",
 d7: "leaderboard7d",
 d30: "leaderboard30d",
 since_merge: "leaderboardSinceMerge",
 since_burn: "leaderboardSinceBurn",
};

// image map, key type is CategoryId like {defi, cex, gaming, nft, etc.}
// value is a type with two image items used to set different key type selected(highlight) or un-selected(unhighlight) status
const imgMap: Record<CategoryId, { colorOff: StaticImageData; colorOn: StaticImageData }> = {
 cex: {
  colorOff: chartSlateus as StaticImageData,
  colorOn: chartOwn as StaticImageData,
 },
 nft: {
  colorOff: paletteSlateus as StaticImageData,
  colorOn: paletteOwn as StaticImageData,
 },
 defi: {
  colorOff: moneyWingsSlateus as StaticImageData,
  colorOn: moneyWingsOwn as StaticImageData,
 },
 gaming: {
  colorOff: questionMarkSlateus as StaticImageData,
  colorOn: questionMarkOwn as StaticImageData,
 },
 l1: {
  colorOff: questionMarkSlateus as StaticImageData,
  colorOn: questionMarkOwn as StaticImageData,
 },
 "l1-bridge": {
  colorOff: bridgeSlateus as StaticImageData,
  colorOn: bridgeOwn as StaticImageData,
 },
 l2: {
  colorOff: chainsSlateus as StaticImageData,
  colorOn: chainsOwn as StaticImageData,
 },
 mev: {
  colorOff: robotSlateus as StaticImageData,
  colorOn: robotOwn as StaticImageData,
 },
 misc: {
  colorOff: dotsSlateus as StaticImageData,
  colorOn: dotsOwn as StaticImageData,
 },
 transfers: {
  colorOff: transfersSlateus as StaticImageData,
  colorOn: transfersOwn as StaticImageData,
 },
 creations: {
  colorOff: copySlateus as StaticImageData,
  colorOn: copyOwn as StaticImageData,
 },
 blobs: {
  colorOff: mdBubbleChartSlateus as StaticImageData,
  colorOn: mdBubbleChartOwn as StaticImageData,
 },
 woof: {
  colorOff: questionMarkSlateus as StaticImageData,
  colorOn: questionMarkOwn as StaticImageData,
 },
};

const imgAltMap: Record<CategoryId, string> = {
 "l1-bridge": "a bridge, signaling L1 bridge fees",
 cex: "a bridge, signaling CEX bridge fees",
 defi: "an image of flying money, signaling DeFi",
 gaming: "a game controller, signaling gaming",
 l1: "a bridge, signaling L1 fees",
 l2: "a bridge, signaling L2 fees",
 mev: "a robot, signaling bots extracting miner-extractable-value",
 misc: "three dots, signaling the summing of other contracts that have been categorized",
 nft: "icon of a wooden painters palette, signaling NFTs",
 transfers: "an image of flying money, signaling ETH transfers",
 creations: "a copy icon, signaling contract creations",
 blobs: "a blob icon, signaling blob fees",
 woof: "a dog, signaling meme tokens",
};

const buildMiscCategory = (
 burnCategories: BurnCategory[],
 activeCategories: CategoryId[],
 setHoveringMisc: (bool: boolean) => void,
 hoveringMisc: boolean,
): CategoryProps =>
 burnCategories
  .filter((category) => !activeCategories.includes(category.category))
  .reduce(
   (sumCategory, category) => ({
    ...sumCategory,
    fees: (sumCategory.fees ?? 0) + category.fees,
    feesUsd: (sumCategory.feesUsd ?? 0) + category.feesUsd,
    transactionCount:
     (sumCategory.transactionCount ?? 0) + category.transactionCount,
    percentOfTotalBurn:
     (sumCategory.percentOfTotalBurn ?? 0) + category.percentOfTotalBurn,
    percentOfTotalBurnUsd:
     (sumCategory.percentOfTotalBurnUsd ?? 0) +
     category.percentOfTotalBurnUsd,
    onHoverCategory: setHoveringMisc,
    showHighlight: hoveringMisc,
   }),
   {
    id: "misc",
    imgName: {
     colorOff: dotsSlateus as StaticImageData,
     colorOn: dotsOwn as StaticImageData,
    },
    imgAlt:
     "three dots, signaling the summing of other contracts that have been categorized",
    fees: 0,
    feesUsd: 0,
    transactionCount: 0,
    percentOfTotalBurn: 0,
    percentOfTotalBurnUsd: 0,
    onHoverCategory: setHoveringMisc,
    showHighlight: hoveringMisc,
   } as CategoryProps,
  );

type Props = {
 onClickTimeFrame: OnClick;
 timeFrame: TimeFrame;
};

const BurnCategoryWidget: FC<Props> = ({
 onClickTimeFrame, timeFrame }) => {

 const burnCategories = useBurnCategories();
 const groupedAnalysis1 = useGroupedAnalysis1();
 const leaderboard = groupedAnalysis1?.leaderboards?.[
  leaderboardKeyFromTimeFrame[ timeFrame ] ];
 const feesBurned = groupedAnalysis1?.blobFeeBurns;

 // TODO: fetchBurnSums now return mock datasets this should be fixed after backend services are done and deployed. 
 const burnSum = fetchBurnSums()[ timeFrame ];
 const [ hoverState, dispatchHover ] = useReducer(hoverReducer, initialState);
 const { showCategoryCounts } = useContext(FeatureFlagsContext);

 const combinedCategoriesPerTimeFrame: Record<TimeFrame, O.Option<CategoryProps[]>> =
  useMemo(
   () => pipe(
    timeFrames, // take ["m5", "h1", "d1", "d7", "d30", "since_burn", "since_merge"] as pipe input
    RA.toArray, // 
    A.map((timeFrame) => {
     if ([ "m5" ].includes(timeFrame)) {
      return [ timeFrame, O.none ] as [ TimeFrame, O.Option<CategoryProps[]>, ];
     }

     const categoryFromCategories = (
      category: BurnCategory,
     ): CategoryProps =>
      pipe({
       id: category.category,
       imgName: imgMap[ category.category ] ?? {
        colorOn: questionMarkOwn as StaticImageData,
        colorOff: questionMarkSlateus as StaticImageData,
       },
       imgAlt: imgAltMap[ category.category ] ?? "question mark signaling missing image",
       fees: category?.fees,
       feesUsd: category?.feesUsd,
       transactionCount: category?.transactionCount,
       percentOfTotalBurn: category?.percentOfTotalBurn,
       percentOfTotalBurnUsd: category?.percentOfTotalBurnUsd,
       onHoverCategory: (hovering: boolean) =>
        dispatchHover({
         type: hovering ? "highlight" : "unhighlight",
         category: category.category,
        }),
       showHighlight: hoverState[ category.category ] ?? false,
      });

     const apiBurnCategories = pipe(
      burnCategories,
      O.fromNullable,
      O.chain(O.fromNullableK((categories) => categories[ timeFrame ])),
      O.map(A.map(categoryFromCategories)),
     );

     // data fetched ok 
     console.log("#apiBurnCategories", apiBurnCategories);

     // ethTransfers is a special case that we hack on in the frontend.
     const ethTransfers = pipe(
      leaderboard,
      O.fromNullable,
      O.map(A.filter((item) => item.type === "eth-transfers")),
      O.chain(A.head),
      O.map(
       (transfers): CategoryProps => ({
        imgName: imgMap.transfers,
        id: "transfers",
        imgAlt: "missing icon for ETH transfer fees",
        fees: transfers.fees,
        feesUsd: transfers.feesUsd,
        transactionCount: undefined,
        percentOfTotalBurn: transfers.fees / burnSum.sum.eth / 1e18,
        percentOfTotalBurnUsd: transfers.feesUsd / burnSum.sum.usd,
        onHoverCategory: (hovering) =>
         dispatchHover({
          type: hovering ? "highlight" : "unhighlight",
          category: "transfers",
         }),
        showHighlight: hoverState[ "transfers" ] ?? false
       }),
      ),
     );

     // date conveted ok 
     console.log("#ethTransfers", ethTransfers);

     // contractCreations is a special case that we hack on in the frontend.
     const contractDeployments = pipe(
      leaderboard,
      O.fromNullable,
      O.map(A.filter((entry) => entry.type === "contract-creations")),
      O.chain(A.head),
      O.map(
       (creations): CategoryProps => ({
        imgName: imgMap.creations,
        id: "creations",
        imgAlt: "missing icon for contract creation fees",
        fees: creations.fees,
        feesUsd: creations.feesUsd,
        transactionCount: undefined,
        percentOfTotalBurn: creations.fees / burnSum.sum.eth / 1e18,
        percentOfTotalBurnUsd: creations.feesUsd / burnSum.sum.usd,
        onHoverCategory: (hovering) =>
         dispatchHover({
          type: hovering ? "highlight" : "unhighlight",
          category: "creations",
         }),
        showHighlight: hoverState[ "creations" ] ?? false
       }),
      )
     );

     // date conveted ok 
     console.log("#contractDeployments", contractDeployments);

     // manipulate blobFees here
     // convert blobFees into CategoryProps()
     const blobFees = pipe(
      feesBurned,
      O.fromNullable,
      O.map((item): CategoryProps => ({
       imgName: imgMap.blobs,
       id: "blobs",
       imgAlt: "missing icon for contract blob fees",
       fees: item[ timeframeFeesBurnedMap[ timeFrame ][ "eth" ] ],
       feesUsd: item[ timeframeFeesBurnedMap[ timeFrame ][ "usd" ] ],
       transactionCount: undefined,
       percentOfTotalBurn: item[ timeframeFeesBurnedMap[ timeFrame ][ "eth" ] ] / burnSum.sum.eth / 1e18,
       percentOfTotalBurnUsd: item[ timeframeFeesBurnedMap[ timeFrame ][ "usd" ] ] / burnSum.sum.usd,
       onHoverCategory: (hovering) =>
        dispatchHover({
         type: hovering ? "highlight" : "unhighlight",
         category: "blobs",
        }),
       showHighlight: hoverState[ "blobs" ] ?? false
      }),
      ),
     );

     // data conveted not ok 
     console.log("#feesBurned", feesBurned);
     console.log("#groupedAnalysis1", groupedAnalysis1);
     console.log("#blobFees", blobFees);

     // convert burnCategories into miscCategory here 
     const miscCategory = pipe(
      burnCategories,
      O.fromNullable,
      O.map((categories) => buildMiscCategory(
       categories[ timeFrame ],
       activeCategories,
       (hovering) =>
        dispatchHover({
         type: hovering ? "highlight" : "unhighlight",
         category: "misc",
        }),
       hoverState[ "misc" ] ?? false
      )),);

     // date conveted ok 
     console.log("#miscCategory", miscCategory); 


     // here we combine all categories that locates in time frame = current pipe's timeFrame together 
     const combinedCategories = pipe(
      OAlt.sequenceTuple(apiBurnCategories, ethTransfers, contractDeployments, blobFees, miscCategory),
      O.map(([ apiCategories, ethTransfers, contractDeployments, blobFees, miscCategory ]) =>
       pipe(
        apiCategories,
        A.filter((item) => activeCategories.includes(item.id)),
        (categories) => [ ...categories, ethTransfers, contractDeployments, blobFees, miscCategory ],
        A.sort(sortByFeesDesc),
       )
      ),
     );


     // ok here 
     console.log("#combinedCategories", combinedCategories); 

     // organize different timeFrames(5m, 1d, 7d, 30d, since_burn, since_merge) correspoinding combined categories 
     // together at the end of the timeFrame pipe layer 
     const ret = [ timeFrame, combinedCategories ] as [
      TimeFrame,
      O.Option<CategoryProps[]>,
     ];
     console.log("#combinedCategories", combinedCategories);
     console.log("#timeFrame", timeFrame);
     console.log("#ret", ret);
     return ret; 
    }), Record.fromEntries),
   [ burnCategories,
    burnSum.sum.eth,
    burnSum.sum.usd,
    hoverState,
    leaderboard,
    sortByFeesDesc
   ]);

 return (
  <BurnGroupBase
   backgroundClassName="h-[624px]"
   onClickTimeFrame={ onClickTimeFrame }
   title="burn categories"
   timeFrame={ timeFrame }
  >
   { pipe(
    combinedCategoriesPerTimeFrame[ timeFrame ],
    O.match(
     () => (
      <div
       className={ `
                flex h-[394px] w-full items-center justify-center
                text-center text-lg text-slateus-200
              `}
      >
       time frame unavailable
      </div>
     ),
     (categories) => (
      <>
       <div>
        <div className={ `relative flex items-center py-4` }>
         <div className="absolute w-full h-2 rounded-full color-animation bg-slateus-600"></div>
         <div className="flex top-0 left-0 z-10 flex-row items-center w-full">
          { categories.map((category, index) => {
           return (
            <CategorySegmentItem
             key={ category.id }
             isFirst={ index === 0 }
             isLast={ index === categories.length - 1 }
             categoryProps={ category }
            />
           );
          }) }
         </div>
        </div>
       </div>
       <div className={ `flex flex-col gap-y-4` }>
        <div
         className={ `grid items-center ${showCategoryCounts ? "md:grid-cols-3" : "grid-cols-2"
          }` }
        >
         <LabelText>category</LabelText>
         <div
          className={ `
                      text-right
                      ${showCategoryCounts ? "col-span-1" : "col-span-1"}
                      ${showCategoryCounts ? "md:mr-8" : ""}
                    `}
         >
          <LabelText>burn</LabelText>
         </div>
         <LabelText
          className={ `hidden text-right ${showCategoryCounts ? "md:block" : ""
           }` }
         >
          transactions
         </LabelText>
        </div>
        { categories.map((category) => (
         <CategoryRow
          key={ category.id }
          amountFormatted={ formatFees(category.fees) }
          id={ category.id }
          countFormatted={ formatCount(category.transactionCount) }
          hovering={ hoverState[ category.id ] ?? false }
          name={ categoryDisplayMap[ category.id ] }
          setHovering={ dispatchHover }
          showCategoryCounts={ showCategoryCounts }
         />
        )) }
       </div>
      </>
     ),
    ),
   ) }
  </BurnGroupBase >
 )
};

export default BurnCategoryWidget; 
