import { animated, useSpring } from "@react-spring/web";
import type { StaticImageData } from "next/legacy/image";
import Image from "next/legacy/image";
import type { FC } from "react";
import CountUp from "react-countup";
import barrierSvg from "../../assets/barrier-own.svg";
import batSvg from "../assets/bat-own.svg";
import speakerSvg from "../assets/speaker-own.svg";
import LabelText from "./TextNext/LabelText";
import QuantifyText from "./TextNext/QuantifyText";
import WidgetErrorBoundary from "./WidgetErrorBoundary";
import { WidgetBackground } from "./WidgetSubcomponents";
import { WEI_PER_GWEI } from "../constants/eth-units";
import { formatOneDecimal } from "../utils/format";
import type { TimeFrame } from "../utils/time-frames";
import TimeFrameIndicator from "./TimeFrameIndicator";
import type { OnClick } from "./TimeFrameControl";
import type { DateTimeString } from "../constants/time";

// api 
import { useBaseFeePerGasBarrier } from "../api/barrier";
import { useBaseFeePerGasStatsTimeFrame } from "../api/base-fee-per-gas-stats";
import { defined } from "highcharts";

const getPercentage = (
 highest: number,
 lowest: number,
 gas: number,
): number => {
 const range = highest - lowest;
 return (gas - lowest) / range;
}

const getBlockPageLink = (u: number | undefined): string | undefined =>
 typeof u === "undefined" ? undefined : `https://etherescan.io/block/${u}`;

type MarkerProps = {
 barrier: number;
 blockNumber?: number;
 description?: string;
 emphasize?: boolean;
 gas: number;
 highest: number;
 horizontal: "left" | "right";
 label: string;
 lowest: number;
 markerColor: string;
 vertical: "top" | "bottom";
};

export const Marker: FC<MarkerProps> = ({
 barrier,
 blockNumber,
 emphasize = false,
 gas,
 highest,
 horizontal,
 label,
 lowest,
 markerColor,
 vertical,
}) => {
 const styles = useSpring({
  left: `${getPercentage(highest, lowest, gas) * 100}%`
 });

 return (
  <animated.div
   className={`
   absolute flex -translate-x-1/2 flex-col items-center
   ${vertical === "top" ? "-top-[48px]" : "-bottom-[40px]"}
   `}
   style={styles}
   title="ultra sound barrier"
  >
   {vertical === "bottom" && (
    <div
     className={`h-12 w-px rounded-b-full ${markerColor} `}
    ></div>
   )}
   {label === "barrier" ? (
    <>
     <div className={`
         absolute top-2 flex h-[15px]
         w-[53px] select-none gap-x-1 
         ${horizontal === "right" ? "left-2" : "right-2"}
     `}>

      <Image
       alt="emoji of a bat, first-half of signfying ultra sound base fee per gas"
       src={batSvg as StaticImageData}
       width={15}
       height={15}
      />

      <Image
       alt="emoji of a speaker, second-half of signifying ultra sound base fee per gas"
       src={speakerSvg as StaticImageData}
       width={15}
       height={15}
      />

      <Image
       alt="emoji of a barrier, third-half of signifying ultra sound base fee per gas"
       src={barrierSvg as StaticImageData}
       width={15}
       height={15}
      />
     </div>
    </>
   )
    : (
     <LabelText
      color={emphasize ? undefined : "text-slateus-400"}
      className={`
        absolute top-2 
        ${vertical === "top" ? "top-2" : "top-3"}
        ${horizontal === "right" ? "left-2" : "right-2"}
        ${emphasize ? "" : "text-slateus-400"}
      `}
     >{label}</LabelText>
    )
   }
   <QuantifyText
    className={`
       absolute
       ${vertical === "top" ? "top-6" : "top-7"}
       ${horizontal === "right" ? "left-2" : "right-2"}
    `}
    color={
     label === "average"
      ? `bg-gradient-to-r bg-clip-text text-transparent ${gas >= barrier
       ? "from-orange-400 to-yellow-300"
       : "from-cyan-300 to-indigo-500"
      }`
      : emphasize
       ? "text-white"
       : "text-slateus-200"
    }
    size="text-sm"
    unitPostfix={vertical === "top" ? "Gwei" : undefined}
   >
    <a href={getBlockPageLink(blockNumber)}
     target="_blank"
     rel="noreferrer">
     <CountUp
      end={gas / WEI_PER_GWEI}
      preserveValue
      formattingFn={formatOneDecimal}
      duration={1}
      useEasing
      decimals={1}
     />
    </a>
   </QuantifyText>
   {vertical === "top" && (
    <div className={`mt-2 h-12 w-px rounded-t-full ${markerColor}`}></div>
   )}
  </animated.div>
 )
}

type Props = {
 onClickTimeFrame: OnClick;
 timeFrame: TimeFrame;
 blobFees?: boolean;
 barrierGwei?: number;
};

export const GasMarketWidget: FC<Props> = ({
 onClickTimeFrame,
 timeFrame,
 blobFees,
 barrierGwei,
}) => {
 const baseFeePerGasStatsTimeFrame = useBaseFeePerGasStatsTimeFrame(
  timeFrame,
  blobFees
 );

 const baseFeePerGasBarrier = useBaseFeePerGasBarrier();
 const barrier = (barrierGwei ?? baseFeePerGasBarrier.barrier) * WEI_PER_GWEI;
 const barPaddingFactor = 0.08;
 const lowest =
  baseFeePerGasStatsTimeFrame === undefined || barrier === undefined
   ? undefined
   : Math.min(barrier, baseFeePerGasStatsTimeFrame.min) -
   Math.max(barrier, baseFeePerGasStatsTimeFrame.max) * barPaddingFactor;

 const highest =
  baseFeePerGasStatsTimeFrame === undefined || barrier === undefined
   ? undefined
   : Math.max(baseFeePerGasStatsTimeFrame.max, barrier) * (1 + barPaddingFactor);

 const gasRange =
  highest === undefined || lowest === undefined
   ? undefined
   : highest - lowest;

 const averagePercent =
  baseFeePerGasStatsTimeFrame === undefined ||
   gasRange === undefined ||
   lowest === undefined
   ? undefined
   : ((baseFeePerGasStatsTimeFrame.average - lowest) / gasRange) * 100;

 const barrierPercent =
  baseFeePerGasStatsTimeFrame === undefined ||
   barrier === undefined ||
   gasRange === undefined ||
   lowest === undefined
   ? undefined
   : ((barrier - lowest) / gasRange) * 100;

 const deltaPercent =
  barrierPercent !== undefined && averagePercent !== undefined
   ? averagePercent - barrierPercent
   : undefined;

 const isDataAvailable =
  barrier !== undefined &&
  baseFeePerGasStatsTimeFrame !== undefined &&
  highest !== undefined &&
  lowest !== undefined &&
  deltaPercent !== undefined;

 const deltaLeft =
  deltaPercent === undefined
   ? undefined
   : deltaPercent >= 0
    ? `${barrierPercent}%`
    : `${averagePercent}%`;

 const deltaWidth =
  deltaPercent === undefined ? undefined : `${Math.abs(deltaPercent)}%`;

 const title = blobFees ? "blob gas market" : "gas market";

 return <WidgetErrorBoundary title={title}>
  <div>children content for temp</div>
 </WidgetErrorBoundary>
}