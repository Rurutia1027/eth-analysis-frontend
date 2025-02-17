import JSBI from "jsbi";
import dynamic from "next/dynamic";
import Head from "next/head";
import type { FC, MouseEvent } from "react";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import colors from "../constants/colors";
import BasicErrorBoundary from "../components/BasicErrorBoundary";
import HeaderGlow from "../components/HeaderGlow";
import MainTitle from "../components/MainTitle";
import { WEI_PER_ETH } from "../constants/eth-units";
import {
  FeatureFlagsContext,
  useFeatureFlags,
} from "../contexts/FeatureFlagContext";
import { formatZeroDecimals } from "../utils/format";
import { ContactSection } from "./sections/ContactSection";
import {
  TimeFrame,
  getNextTimeFrame,
  getPreviousTimeFrame,
} from "../utils/time-frames";
import FaqBlock from "../components/Faq";
import GasSection from "./sections/GasSection";
import BlobGasSection from "./sections/BlobGasSection";
import SupplyProjectionSection from "./sections/SupplyProjectionSection";
import FlippeningSection from "./sections/FlippeningSection";
import TotalValueSecuredSection from "./sections/TotalValueSecuredSection";
import MonetaryPremiumSection from "./sections/MonetaryPremiumSection";
import FamSection from "./sections/FamSection";
import { PoapSection } from "./sections/PoapSection";
import { useRouter } from "next/router";
import BurnSection from "./sections/BurnSection";

const Dashboard: FC = () => {
  const { featureFlags, setFlag } = useFeatureFlags();
  const router = useRouter();
  const timeFrame = (router.query.timeFrame as TimeFrame) || "d7";
  const videoEl = useRef<HTMLVideoElement>(null);
  const { simulateDeflationary } = featureFlags;
  const showVideo = simulateDeflationary;

  const handleClickTimeFrame = useCallback(
    async (e: MouseEvent<HTMLElement>) => {
      const newTimeFrame = e.shiftKey
        ? getPreviousTimeFrame(timeFrame)
        : getNextTimeFrame(timeFrame);

      await router.push(
        {
          pathname: router.pathname,
          query: {
            ...router.query,
            timeFrame: newTimeFrame,
          },
        },
        undefined,
        { shallow: true },
      );
    },
    [timeFrame, router],
  );

  const handleToggleBatLoop = useCallback(() => {
    if (videoEl.current === null) {
      return;
    }
    videoEl.current.paused
      ? videoEl.current.play().catch(console.error)
      : videoEl.current.pause();
  }, []);

  const handleSetTimeFrame = useCallback(
    async (newTimeFrame: TimeFrame) => {
      await router.push(
        {
          pathname: router.pathname,
          query: {
            ...router.query,
            timeFrame: newTimeFrame,
          },
        },
        undefined,
        { shallow: true },
      );
    },
    [router],
  );

  return (
    <FeatureFlagsContext.Provider value={featureFlags}>
      <SkeletonTheme
        baseColor={colors.slateus500}
        highlightColor="#565b7f"
        enableAnimation={true}
      >
        <MainTitle>ultra sound money</MainTitle>
        <GasSection
          timeFrame={timeFrame}
          onClickTimeFrame={handleClickTimeFrame}
        />
        <BlobGasSection
          timeFrame={ timeFrame }
          onClickTimeFrame={ handleClickTimeFrame }
        />
        {/* <SupplyProjectionSection /> */ }
        <BurnSection
          timeFrame={ timeFrame }
          onClickTimeFrame={ handleClickTimeFrame }
          onSetTimeFrame={ handleSetTimeFrame }
        />
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
