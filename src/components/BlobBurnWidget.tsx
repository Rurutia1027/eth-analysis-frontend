import type { FC } from "react";
import LabelText from "./TextNext/LabelText";
import type { StaticImageData } from "next/legacy/image";
import Image from "next/legacy/image";
import CountUp from "react-countup";
import fireSvg from "../assets/fire-own.svg";
import { AmountAnimatedShell } from "./Amount";
import type { FeesBurns } from "../api/grouped-analysis-1";
import { WidgetBackground } from "./WidgetSubcomponents";
import { decodeGroupedAnalysis1, useGroupedAnalysis1 } from "../api/grouped-analysis-1";
import type { TimeFrame } from "../utils/time-frames";
import TimeFrameIndicator from "./TimeFrameIndicator";
import type { OnClick } from "./TimeFrameControl";
import { BURN_USD_DECIMALS, GWEI_FORMATTING_THRESHOLD, MIN_BURN_DECIMALS } from "../constants/eth-units";

export const timeframeFeesBurnedMap: Record<
  TimeFrame,
  { eth: keyof FeesBurns; usd: keyof FeesBurns }
> = {
  m5: { eth: "feesBurned5m", usd: "feesBurned5mUsd" },
  h1: { eth: "feesBurned1h", usd: "feesBurned1hUsd" },
  d1: { eth: "feesBurned24h", usd: "feesBurned24hUsd" },
  d7: { eth: "feesBurned7d", usd: "feesBurned7dUsd" },
  d30: { eth: "feesBurned30d", usd: "feesBurned30dUsd" },
  since_merge: { eth: "feesBurnedSinceMerge", usd: "feesBurnedSinceMergeUsd" },
  since_burn: { eth: "feesBurnedSinceBurn", usd: "feesBurnedSinceBurnUsd" },
};


function firstNonZeroDecimalPosition(num: number) {
  // If the number is >= 1, return 0
  if (num >= 1) {
    return 0;
  }

  // Convert the number to a string to inspect its decimal part
  const strNum = num.toFixed(20).toString();

  // Extract the decimal part by removing everything up to and including the decimal point
  const decimalPart = strNum.split(".")[ 1 ] || "";

  // Find the position of the first non-zero digit in the decimal part
  for (let i = 0; i < decimalPart.length; i++) {
    if (decimalPart[ i ] !== "0") {
      // Return the position (i + 1 because position is 1-indexed in this context)
      return i + 1;
    }
  }

  // If there are no non-zero decimals (or the number is 0), it means all decimals are zero
  return decimalPart.length ? decimalPart.length : 0;
}


type Props = {
  onClickTimeFrame: OnClick;
  timeFrame: TimeFrame;
};
export const BlobBurnWidget: FC<Props> = ({ onClickTimeFrame, timeFrame }) => {
  const groupedAnalysis1F = useGroupedAnalysis1();
  const groupedAnalysis1 = decodeGroupedAnalysis1(groupedAnalysis1F);
  const feesBurns = groupedAnalysis1?.blobFeeBurned;
  const blobFeeBurns =
    feesBurns === undefined
      ? undefined
      : feesBurns[ timeframeFeesBurnedMap[ timeFrame ][ "eth" ] ];
  const blobFeeBurnUSD =
    feesBurns === undefined
      ? undefined
      : feesBurns[ timeframeFeesBurnedMap[ timeFrame ][ "usd" ] ];

  const formatBurnAsGwei =
    blobFeeBurns !== undefined && blobFeeBurns < GWEI_FORMATTING_THRESHOLD;
  const formattedBurn =
    blobFeeBurns !== undefined
      ? blobFeeBurns / (formatBurnAsGwei ? 1e9 : 1e18)
      : undefined;

  const burnDecimals =
    formattedBurn == undefined
      ? undefined
      : Math.max(firstNonZeroDecimalPosition(formattedBurn), MIN_BURN_DECIMALS);

  return (
    <WidgetBackground>
      <div className="flex flex-col gap-y-4">
        <div className="flex justify-between">
          <LabelText>blob fee burn</LabelText>
          <TimeFrameIndicator
            timeFrame={ timeFrame }
            onClickTimeFrame={ onClickTimeFrame }
          />
        </div>
        <div className="mb-4 flex items-center">
          <AmountAnimatedShell
            skeletonWidth="9rem"
            size="text-2xl md:text-3xl lg:text-3xl xl:text-4xl"
            unitText={ formatBurnAsGwei ? "Gwei" : "ETH" }
          >
            <CountUp
              decimals={ burnDecimals }
              duration={ 0.8 }
              end={ formattedBurn ?? 0 }
              preserveValue={ true }
              separator=","
            />
          </AmountAnimatedShell>
          <div className="ml-4 h-6 w-6 select-none md:ml-8 lg:h-8 lg:w-8">
            <Image
              alt="fire emoji symbolizing ETH burned"
              src={ fireSvg as StaticImageData }
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-x-1">
        <div className="flex items-baseline gap-x-1">
          <AmountAnimatedShell
            skeletonWidth="2rem"
            size="text-m"
            unitText="USD"
          >
            <CountUp
              decimals={ BURN_USD_DECIMALS }
              duration={ 0.8 }
              end={ blobFeeBurnUSD ?? 0 }
              preserveValue={ true }
              separator=","
            />
          </AmountAnimatedShell>
        </div>
      </div>
    </WidgetBackground>
  );
};

export default BlobBurnWidget; 