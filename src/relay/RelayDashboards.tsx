import type { FC } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import colors from "../colors";
import AdminTools from "../components/AdminTools";
import BasicErrorBoundary from "../components/BasicErrorBoundary";
import HeaderGlow from "../components/HeaderGlow";
import MainTitle from "../components/MainTitle";
import * as SharedConfig from "../config";
import { FeatureFlagsContext, useFeatureFlags } from "../feature-flags";
import ContactSection from "../sections/ContactSection";
// apis import
import AddressWidget from "./components/AddressWidget";
import CheckRegistrationWidget from "./components/CheckRegisterationWidget";
import InclusionsWidget from "./components/InclusionsWidget";
import ValidatorWidget from "./components/ValidatorWidget";
import LeaderboardSection from "./sections/LeaderboardSection";
import type { RelayCensorship } from "./sections/CensorshipSection/RelayCensorshipWidget";
import FaqSection from "./sections/FaqSection";
import type {
  Builder,
  Payload,
  PayloadStats,
  Validator,
  ValidatorStats,
} from "./types";

export type RelayDashboardProps = {
  payloadStats: PayloadStats;
  payloads: Array<Payload>;
  topBuilders: Array<Builder>;
  topPayloads: Array<Payload>;
  validatorStats: ValidatorStats;
  validators: Array<Validator>;
};

const env = SharedConfig.envFromEnv();

const RelayDashboard: FC<RelayDashboardProps> = ({
  payloadStats,
  payloads,
  topBuilders,
  topPayloads,
  validatorStats,
  validators,
}) => {
  const { featureFlags, setFlag } = useFeatureFlags();

  return (
    <FeatureFlagsContext.Provider value={featureFlags}>
      <SkeletonTheme
        baseColor={colors.slateus500}
        highlightColor="#565b7f"
        enableAnimation={true}
      >
        <HeaderGlow />
        <div className="container mx-auto">
          <BasicErrorBoundary>
            <AdminTools setFlag={setFlag} />
          </BasicErrorBoundary>
          <div className="h-[48.5px] md:h-[68px]" />
          <MainTitle>ultra sound relay</MainTitle>
          {env === "stag" ? (
            <div
              className={`
              mt-4 text-center font-inter text-xl
              font-extralight tracking-wide
              text-slateus-400 sm:mt-0
            `}
            >
              holesky testnet
            </div>
          ) : null}
          <div className="mb-32 mt-16 flex flex-col gap-y-4 xs:px-4 md:px-16">
            <div className="mt-16 flex flex-col gap-x-4 gap-y-4 lg:flex-row">
              <AddressWidget />
            </div>
            <div className="flex lg:w-1/2">
              <CheckRegistrationWidget />
            </div>
          </div>
          <div className="flex flex-col gap-x-4 gap-y-4 lg:flex-row">
            <div className="flex flex-col lg:w-1/2">
              <InclusionsWidget
                payloadCount={payloadStats.count}
                totalValue={payloadStats.totalValue}
                firstPayloadAt={new Date(payloadStats.firstPayloadAt)}
                payloads={payloads}
              />
            </div>
            <div className="flex flex-col lg:w-1/2">
              <ValidatorWidget {...validatorStats} validators={validators} />
            </div>
          </div>
        </div>
        <LeaderboardSection
          payloadCount={payloadStats.count}
          topBuilders={topBuilders}
          topPayloads={topPayloads}
        />
      </SkeletonTheme>
    </FeatureFlagsContext.Provider>
  );
};

export default RelayDashboard;
