import type { FC } from "react";
import { useState } from "react";
import WidgetErrorBoundary from "../../../components/WidgetErrorBoundary";
import {
  WidgetBackground,
  WidgetTitle,
} from "../../../components/WidgetSubcomponents";
import { dateTimeFromSlot } from "../../../time";
import { ethSupplyFromParts, useSupplyParts } from "../../../api/supply-parts";
import HoverTooltip from "../HoverTooltip";
import Nerd from "../Nerd";
import UpdatedAge from "../UpdatedAge";
import CurrentSupplyTooltip from "./CurrentSupplyTooltip";
import PreciseEth from "./PreciseEth";

const EthSupplyWidget: FC = () => {
  const ethSupplyParts = useSupplyParts();
  const ethSupply = ethSupplyFromParts(ethSupplyParts);
  const [showNerdTooltip, setShowNerdTooltip] = useState(false);

  return (
    <WidgetErrorBoundary title="current supply">
      <WidgetBackground className="flex">
        <div className="relative flex flex-col gap-y-4">
          <div
            className={`
                flex cursor-pointer
                items-center
                [&_.color-nerd]:active:brightness-75
                [&_.gray-nerd]:hover:opacity-0
            `}
            onClick={() => setShowNerdTooltip(true)}
          >
            <WidgetTitle>current supply</WidgetTitle>
            <HoverTooltip
              customAlign="-left-16"
              text="Show how the current supply is calculated."
            >
              <Nerd />
            </HoverTooltip>
          </div>
          <div
            className={`
              tooltip
              w-[calc(100% + 96px)] fixed left-1/2
              top-1/2 z-30 -translate-x-1/2 -translate-y-1/2
              cursor-auto
              whitespace-nowrap
              ${showNerdTooltip ? "block" : "hidden"}
            `}
          >
            <CurrentSupplyTooltip
              ethSupply={ethSupplyParts}
              onClickClose={() => setShowNerdTooltip(false)}
            />
          </div>
          <div className="flex flex-col gap-y-4 transition-colors">
            <PreciseEth amount={ethSupply} />
            <UpdatedAge
              updatedAt={dateTimeFromSlot(ethSupplyParts.slot).toISOString()}
            />
          </div>
        </div>
        <div
          className={`
            fixed bottom-0 left-0 right-0 top-0
            z-20 flex items-center
            justify-center
            bg-slateus-700/60
            backdrop-blur-sm
            ${showNerdTooltip ? "" : "hidden"}
          `}
          onClick={() => setShowNerdTooltip(false)}
        ></div>
      </WidgetBackground>
    </WidgetErrorBoundary>
  );
};

export default EthSupplyWidget;
