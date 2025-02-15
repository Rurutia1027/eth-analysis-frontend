import { parseISO } from "date-fns";
import _maxBy from "lodash/maxBy";
import dynamic from "next/dynamic";
import type { FC } from "react";
import { useMemo } from "react";
import type { BaseFeeAtTime } from "../../api/base-fee-over-time";
import { useBaseFeeOverTime } from "../../api/base-fee-over-time";
import type { TimeFrame } from "../../utils/time-frames";
import type { BaseFeePoint } from "../../components/BaseFeesWidget";
import Section from "../../components/Section";
import type { OnClick } from "../../components/TimeFrameControl";

const BlobBurnWidget = dynamic(() => import("../../components/BlobBurnWidget"), {
  ssr: false,
});

const pointsFromBaseFeesOverTime = (
  baseFeesD1: BaseFeeAtTime[],
): BaseFeePoint[] =>
  baseFeesD1.map(
    ({ blob_wei, timestamp }) =>
      [
        parseISO(timestamp).getTime(),
        (blob_wei ?? 0),
      ] as BaseFeePoint,
  );

const BlobGasSection: FC<{ timeFrame: TimeFrame, onClickTimeFrame: OnClick; }>
  = ({ timeFrame, onClickTimeFrame }) => {
    const baseFeesOverTime = useBaseFeeOverTime();

    const [ baseFeesSeries, max ] = useMemo(() => {
      if (baseFeesOverTime === undefined) {
        return [ undefined, undefined ];
      }

      const baseFeesOverTimeTimeFrame = baseFeesOverTime[ timeFrame ] ?? undefined;
      const series =
        baseFeesOverTimeTimeFrame === undefined
          ? undefined
          : pointsFromBaseFeesOverTime(baseFeesOverTimeTimeFrame);
      const max = _maxBy(series, (point) => point[ 1 ]);
      return [ series, max ];

    }, [ baseFeesOverTime, timeFrame ]);

    const baseFeesMap =
      baseFeesSeries === undefined
        ? undefined
        : Object.fromEntries(new Map(baseFeesSeries).entries()); 

  return (
    <Section link="blobs" subtitle="the blobs are here" title="blob gas">
      <div className="flex w-full flex-col gap-y-4 gap-x-4 lg:flex-row">
        <div className="w-full lg:w-1/2">

          {/* BlobFeesWidget */ }

          {/* BlobGasMarketWidget */ }

          {/* BlobBurnWidget */ }
          <BlobBurnWidget
            timeFrame={ timeFrame }
            onClickTimeFrame={ onClickTimeFrame }
          />
        </div>
      </div>
    </Section>
  );
};

export default BlobGasSection;
