import { FC, useCallback, useState } from "react";
import { TimeFrame } from "../../utils/time-frames";
import TimeFrameControl, { OnClick, OnSetTimeFrame } from "../../components/TimeFrameControl";
import { Unit } from "../../constants/denomination";
import Section from "../../components/Section";
import { WidgetTitle } from "../../components/WidgetSubcomponents";
import BurnLeaderboard from "../../components/BurnLeaderboard";
import CurrencyControl from "../../components/CurrencyControl";
import BurnTotal from "../../components/BurnTotal";
import LatestBlocks from "../../components/LatestBlocks";
import BurnRecords from "../../components/BurnRecords";

const BurnSection: FC<{
  timeFrame: TimeFrame; onClickTimeFrame: OnClick; onSetTimeFrame: OnSetTimeFrame;
}>
  = ({ timeFrame, onClickTimeFrame, onSetTimeFrame, }) => {
  const [ unit, setUnit ] = useState<Unit>("eth");
  const onSetUnit = useCallback(setUnit, [ setUnit ]);

    return (
      <Section link="burn" subtitle="it's getting hot in here" title="burn">
        <div className="p-8 w-full rounded-lg bg-slateus-700">
          <div className="flex flex-col gap-y-8 md:flex-row md:justify-between lg:gap-y-0">
            <div className="flex flex-col row-start-1 gap-4 lg:flex-row lg:gap-x-4 lg:items-center">
              <WidgetTitle>time frame</WidgetTitle>
              <TimeFrameControl
                selectedTimeFrame={ timeFrame }
                onSetTimeFrame={ onSetTimeFrame }
              />
            </div>
            <div className="flex flex-col row-start-2 gap-y-4 md:row-start-1 lg:flex-row 
          lg:gap-x-4 lg:items-center">
              <WidgetTitle>currency</WidgetTitle>
              <CurrencyControl selectedUnit={ unit } onSetUnit={ onSetUnit } />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-4 w-full md:gap-x-4 lg:grid-cols-2">
          <BurnTotal
            onClickTimeFrame={ onClickTimeFrame }
            timeFrame={ timeFrame }
            unit={ unit }
          />
          <div className="flex flex-col gap-y-4 lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:max-h-[499px] xl:max-h-[526px]">
            {/* <BurnLeaderboard /> */ }
            {/* BurnCategoryWidget */ }
          </div>
          <div className="lg:row-start-2">
            <LatestBlocks unit={ unit } />
          </div>
          <div className="lg:row-end-4">
            <BurnRecords
              onClickTimeFrame={ onClickTimeFrame }
              timeFrame={ timeFrame }
            />
          </div>
        </div>
      </Section>
    );
  };

export default BurnSection; 