import JSBI from "jsbi";
import dynamic from "next/dynamic";
import Head from "next/head";
import type { FC, MouseEvent } from "react";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import colors from "../colors";
import BasicErrorBoundary from "../components/BasicErrorBoundary";
import HeaderGlow from "../components/HeaderGlow";
import MainTitle from "../components/MainTitle";
import { WEI_PER_ETH } from "../eth-units";
import { FeatureFlagsContext, useFeatureFlags } from "../feature-flags";
import { formatZeroDecimals } from "../format";
import ContactSection from "../sections/ContactSection";
import type { TimeFrame } from "./time-frames";
import { getNextTimeFrame } from "./time-frames";
import FaqBlock from "./components/Faq";
import BurnDashboard from "./sections/BurnDashboard";
import GasSection from "./sections/GasSection";
import BlobGasSection from "./sections/BlobGasSection";
import SupplyProjectionSection from "./sections/SupplyProjectionSection";
import FlippeningSection from "./sections/FlippeningSection";
import TotalValueSecuredSection from "./sections/TotalValueSecuredSection";
import MonetaryPremiumSection from "./sections/MonetaryPremiumSection";
import FamSection from "./sections/FamSection";

const Dashboard: FC = () => {
  const { featureFlags, setFlag } = useFeatureFlags();
  return (
    <FeatureFlagsContext.Provider value={featureFlags}>
      <SkeletonTheme
        baseColor={colors.slateus500}
        highlightColor="#565b7f"
        enableAnimation={true}
      >
        <MainTitle>ultra sound money</MainTitle>
        <GasSection />
        <BlobGasSection />
        <SupplyProjectionSection />
        <BurnDashboard />
        <FlippeningSection />
        <TotalValueSecuredSection />
        <MonetaryPremiumSection />
        <FamSection />
        <div className="mt-32 flex px-4 md:px-0">
          <ContactSection />
        </div>
      </SkeletonTheme>
    </FeatureFlagsContext.Provider>
  );
};

export default Dashboard;
