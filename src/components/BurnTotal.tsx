import { FC, useEffect } from "react";
import { LimitedTimeFrame, TimeFrame } from "../utils/time-frames";
import { BurnRates, FeesBurned, decodeGroupedAnalysis1, useGroupedAnalysis1 } from "../api/grouped-analysis-1";
import Image, { StaticImageData } from "next/legacy/image";
import fireSvg from "../assets/fire-own.svg";
import * as Duration from "../constants/duration";
import * as Format from "../utils/format";
import { OnClick } from "./TimeFrameControl";
import { Unit } from "../constants/denomination";
import { useState } from "react";
import { usePosIssuancePerDay } from "../hooks/use-pos-issuance-day";
import * as DateFns from "date-fns";
import { londonHardFork, parisHardFork } from "../constants/dates";
import WidgetErrorBoundary from "./WidgetErrorBoundary";
import { WidgetBackground } from "./WidgetSubcomponents";
import { WidgetTitle } from "./WidgetSubcomponents";
import TimeFrameIndicator from "./TimeFrameIndicator";
import { AmountAnimatedShell } from "./Amount";
import CountUp from "react-countup";
import { BaseText } from "./Texts";

const timeframeFeesBurnedMap: Record<TimeFrame,
 { eth: keyof FeesBurned, usd: keyof FeesBurned }> = {
 m5: { eth: "feesBurned5m", usd: "feesBurned5mUsd" },
 h1: { eth: "feesBurned1h", usd: "feesBurned1hUsd" },
 d1: { eth: "feesBurned24h", usd: "feesBurned24hUsd" },
 d7: { eth: "feesBurned7d", usd: "feesBurned7dUsd" },
 d30: { eth: "feesBurned30d", usd: "feesBurned30dUsd" },
 since_merge: { eth: "feesBurnedSinceMerge", usd: "feesBurnedSinceMergeUsd" },
 since_burn: { eth: "feesBurnedSinceBurn", usd: "feesBurnedSinceBurnUsd" },
};

export const timeframeBurnRateMap:
 Record<TimeFrame, { eth: keyof BurnRates; usd: keyof BurnRates }> = {
 m5: { eth: "burnRate5m", usd: "burnRate5mUsd" },
 h1: { eth: "burnRate1h", usd: "burnRate1hUsd" },
 d1: { eth: "burnRate24h", usd: "burnRate24hUsd" },
 d7: { eth: "burnRate7d", usd: "burnRate7dUsd" },
 d30: { eth: "burnRate30d", usd: "burnRate30dUsd" },
 since_merge: { eth: "burnRateSinceMerge", usd: "burnRateSinceMergeUsd" },
 since_burn: { eth: "burnRateSinceBurn", usd: "burnRateSinceBurnUsd" },
};

const timeFrameMillisecondsMap: Record<LimitedTimeFrame, number> = {
 d30: Duration.millisFromDays(30),
 d7: Duration.millisFromDays(7),
 d1: Duration.millisFromHours(24),
 h1: Duration.millisFromHours(1),
 m5: Duration.millisFromMinutes(5),
};

type Props = {
 onClickTimeFrame: OnClick;
 timeFrame: TimeFrame;
 unit: Unit;
};

const BurnTotal: FC<Props> = ({ onClickTimeFrame, timeFrame, unit }) => {
  const groupedAnalysis1F = useGroupedAnalysis1(); const groupedAnalysis1 =
    groupedAnalysis1F !== undefined ? decodeGroupedAnalysis1(groupedAnalysis1F) : undefined;
  const burnRates = groupedAnalysis1?.burnRates;
  const feesBurned = groupedAnalysis1?.feesBurned;

 // EIP-1559
 const [ millisecondsSinceLondonHardFork, setMillisecondsSinceLondonHardfork ] =
  useState<number>();

 // the merge: PoW -> PoS, Execution Chain -> Beacon Chain 
 const [ millisecondsSinceMerge, setMillisecondsSinceMerge ] =
  useState<number>();

 // post issuance per day 
 const posIssuancePerDay = usePosIssuancePerDay();

  const selectedFeesBurnedEth =
    feesBurned === undefined
      ? undefined
      : unit === "eth"
        ? feesBurned[ timeframeFeesBurnedMap[ timeFrame ][ "eth" ] ]
        : feesBurned[ timeframeFeesBurnedMap[ timeFrame ][ "usd" ] ]

 // check whether the unit is in ETH or in USD 
 const selectedFeesBurned =
  feesBurned === undefined // is remote data records fetched successfully ? 
   ? undefined
   : unit === "eth"
    ? feesBurned[ timeframeFeesBurnedMap[ timeFrame ][ "eth" ] ]
    : feesBurned[ timeframeFeesBurnedMap[ timeFrame ][ unit ] ];

 // in ETH / min or USD K / min 
 const selectedBurnRate =
  burnRates === undefined
   ? undefined
   : unit === "eth"
    ? burnRates[ timeframeBurnRateMap[ timeFrame ][ unit ] ]
    : burnRates[ timeframeBurnRateMap[ timeFrame ][ unit ] ];

 const issuancePerMillisecond = posIssuancePerDay / Duration.millisFromDays(1);
 useEffect(() => {
  // how many ms passed from now -> London Hard Fork = since_burn 
  setMillisecondsSinceLondonHardfork(
   DateFns.differenceInMilliseconds(new Date(), londonHardFork),
  );
  // how many ms passed from now -> Pairs Hard Fork(The Merge) = since_merge 
  setMillisecondsSinceMerge(
   DateFns.differenceInMilliseconds(new Date(), parisHardFork),
  );
 }, []);

 // In ETH. 
 const selectedIssuance =
  millisecondsSinceLondonHardFork === undefined || millisecondsSinceMerge === undefined
   ? undefined
   : timeFrame === "since_burn"
    ? issuancePerMillisecond * millisecondsSinceLondonHardFork
    : issuancePerMillisecond * timeFrameMillisecondsMap[ timeFrame as LimitedTimeFrame ];
 // Fraction. 
 const issuanceOffset =
  selectedIssuance === undefined || selectedFeesBurnedEth === undefined
   ? undefined
   : Format.ethFromWei(selectedFeesBurnedEth) / selectedIssuance;

  return (
    <WidgetErrorBoundary title="burn total">
      <WidgetBackground className="relative">
        <div className="pointer-events-none absolute left-0 right-0 top-0 bottom-0 overflow-hidden rounded-lg">
          <div
            className={ `
              top-15
              absolute -left-20 h-full
              w-full opacity-[0.13]
              blur-[50px]
              will-change-transform
              md:top-20
              md:blur-[70px]
            `}
          >
            <div
              className={ `
                absolute h-4/5 w-4/5 rounded-[35%] bg-[#243AFF]
                md:h-3/5
                md:w-3/5
              `}
            ></div>
          </div>
          <div
            className={ `
              absolute
              top-0 -left-20 h-full
              w-full opacity-[0.25]
              blur-[50px]
              will-change-transform md:top-5
              md:blur-[70px]
            `}
          >
            <div
              className={ `
                absolute -left-5
                h-4/5 w-full rounded-[35%] bg-[#FF8D24] md:left-0
                md:h-3/5
                md:w-4/5
              `}
            ></div>
          </div>
        </div>
        <div className="flex items-baseline justify-between">
          <WidgetTitle>burn total</WidgetTitle>
          <TimeFrameIndicator
            onClickTimeFrame={ onClickTimeFrame }
            timeFrame={ timeFrame }
          />
        </div>
        <div className="flex flex-col gap-y-4 pt-4">
          <div className="flex items-center">
            <AmountAnimatedShell
              skeletonWidth="9rem"
              size="text-2xl md:text-3xl lg:text-3xl xl:text-4xl"
              unitText={ unit === "eth" ? "ETH" : "USD" }
            >
              <CountUp
                decimals={ unit === "eth" ? 2 : 0 }
                duration={ 0.8 }
                end={
                  selectedFeesBurned === undefined
                    ? 0
                    : unit === "eth"
                      ? Format.ethFromWei(selectedFeesBurned)
                      : selectedFeesBurned
                }
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
          <div className="flex flex-col justify-between gap-y-4 lg:flex-row">
            <div className="flex flex-col gap-y-4">
              <WidgetTitle>burn rate</WidgetTitle>
              <AmountAnimatedShell
                skeletonWidth="4rem"
                size="text-2xl md:text-3xl lg:text-2xl xl:text-4xl"
                unitText={ unit === "eth" ? "ETH/min" : "USD/min" }
              >
                <CountUp
                  decimals={ unit === "eth" ? 2 : 1 }
                  duration={ 0.8 }
                  end={
                    selectedBurnRate === undefined
                      ? 0
                      : unit === "eth"
                        ? Format.ethFromWei(selectedBurnRate)
                        : selectedBurnRate / 1000
                  }
                  preserveValue={ true }
                  separator=","
                  suffix={ unit === "usd" ? "K" : "" }
                />
              </AmountAnimatedShell>
            </div>
            <div className="flex flex-col gap-y-4 lg:text-right">
              <WidgetTitle>issuance offset</WidgetTitle>
              <BaseText
                font="font-roboto"
                size="text-2xl md:text-3xl lg:text-2xl xl:text-4xl"
              >
                <CountUp
                  decimals={ 2 }
                  duration={ 0.8 }
                  separator=","
                  end={ issuanceOffset ?? 0 }
                  preserveValue={ true }
                  suffix={ "x" }
                />
              </BaseText>
            </div>
          </div>
        </div>
      </WidgetBackground>
    </WidgetErrorBoundary>
  );
};

export default BurnTotal; 