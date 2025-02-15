import { FC, useMemo } from "react";
import dynamic from "next/dynamic";
import _maxBy from "lodash/maxBy";
import { BaseFeePoint } from "../../components/BaseFeesWidget";
import { BaseFeeAtTime } from "../../api/base-fee-over-time";
import { parseISO } from "date-fns";
import { WEI_PER_GWEI } from "../../constants/eth-units";
import { TimeFrame } from "../../utils/time-frames";
import { OnClick } from "../../components/TimeFrameControl";
import { useBaseFeeOverTime } from "../../api/base-fee-over-time";
import Section from "../../components/Section";
import { GasMarketWidget } from "../../components/GasMarketWidget";

const BaseFeesWidget = dynamic(
  () =>
    import("../../components/BaseFeesWidget").then((mod) => mod.BaseFeesWidget),
  { ssr: false },
);

const pointsFromBaseFeesOverTime = (
  baseFeeD1: BaseFeeAtTime[],
): BaseFeePoint[] =>
  baseFeeD1.map(
    ({ wei, timestamp }) =>
      [parseISO(timestamp).getTime(), wei / WEI_PER_GWEI] as BaseFeePoint,
  );

const GasSection: FC<{ timeFrame: TimeFrame; onClickTimeFrame: OnClick }> = ({
  timeFrame,
  onClickTimeFrame,
}) => {
  const baseFeesOverTime = useBaseFeeOverTime();
  const [baseFeesSeries, max] = useMemo(() => {
    if (baseFeesOverTime === undefined) {
      return [undefined, undefined];
    }

    const baseFeesOverTimeTimeFrame = baseFeesOverTime[timeFrame] ?? undefined;
    const series =
      baseFeesOverTimeTimeFrame === undefined
        ? undefined
        : pointsFromBaseFeesOverTime(baseFeesOverTimeTimeFrame);

    const max = _maxBy(series, (point) => point[1]);
    return [series, max];
  }, [baseFeesOverTime, timeFrame]);

  const baseFeesMap =
    baseFeesSeries === undefined
      ? undefined
      : Object.fromEntries(new Map(baseFeesSeries).entries());

  return (
    <Section link="gas" subtitle="gas is the new oil" title="gas">
      <div className="floex-col flex w-full gap-x-4 gap-y-4 lg:flex-row">
        <div className="w-full lg:w-1/2">
          <BaseFeesWidget
            barrier={baseFeesOverTime?.barrier}
            baseFeesSeries={baseFeesSeries}
            baseFeesMap={baseFeesMap ?? {}}
            max={max?.[1]}
            timeFrame={timeFrame}
            onClickTimeFrame={onClickTimeFrame}
          />
        </div>
        <div className="flex w-full flex-col gap-y-4 lg:w-1/2">
          <GasMarketWidget
            timeFrame={timeFrame}
            onClickTimeFrame={onClickTimeFrame}
            barrierGwei={19.830391430171957}
          />
        </div>
      </div>
    </Section>
  );
};
export default GasSection;
