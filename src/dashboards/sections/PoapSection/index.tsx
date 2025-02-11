// import react libs
import Image from "next/image";
import { captureException } from "@sentry/nextjs";
import type { StaticImageData } from "next/image";
import type {
  ChangeEvent,
  CSSProperties,
  Dispatch,
  FC,
  FormEvent,
  MouseEventHandler,
  ReactNode,
  SetStateAction,
} from "react";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { FixedSizeList } from "react-window";
import useSWR from "swr";

// import scss styles
import scrollbarStyles from "../../../styles/Scrollbar.module.scss";

// import components
import { BaseText, TooltipTitle } from "../../../components/Texts";
import LabelText from "../../../components/TextNext/LabelText";
import Twemoji from "../../../components/Twemoji";
import LinkText from "../../../components/TextNext/LinkText";
import { WidgetBackground } from "../../../components/WidgetSubcomponents";
import { SectionTitle } from "../../../components/TextNext/SectionTitle";
import WidgetErrorBoundary from "../../../components/WidgetErrorBoundary";

// import hooks
import { TwitterAuthStatus } from "../../../hooks/use-twitter-auth";
import { AuthFromSection } from "../../../hooks/use-auth-from-section";

// import constant
import { DateTimeString } from "../../../constants/time";
import * as SharedConfig from "../../../constants/config";
import * as Format from "../../../utils/format";

// import api
import { Linkables } from "../../../api/profiles";

// import svg resources
import closeSvg from "../../../assets/close.svg";
import flexSvg from "../../../assets/flex-own.svg";
import logoTwitterWhite from "../../../assets/logo-twitter-white.svg";
import questionMarkSvg from "../../../assets/question-mark-v2.svg";
import sobSvg from "../../../assets/sob-own.svg";
import hearNoEvilSvg from "./hear-no-evil-own.svg";
import logoPoapSvg from "./logo-poap-slateus.svg";
import magnifyingGlassSvg from "./magnifying-glass-own.svg";
import seeNoEvilSvg from "./see-no-evil-own.svg";
import speakNoEvilSvg from "./speak-no-evil-own.svg";
import ultraSoundPoapStill from "./ultrasoundpoapstill.png";
import ultraSoundPoapGif from "./utlra_sound_poap.gif";
import { fetchJsonSwr } from "../../../api/fetchers";
import QuantifyText from "../../../components/TextNext/QuantifyText";
import SkeletonText from "../../../components/TextNext/SkeletonText";
import { A } from "../../../utils/fp";

type ClaimPoapTooltipProps = {
  className?: string;
  onClickClose?: () => void;
};

const TooltipText: FC<{ children: ReactNode; inline?: boolean }> = ({
  children,
  inline = false,
}) => (
  <BaseText font="font-inter" size="text-base" inline={inline}>
    {children}
  </BaseText>
);

const ClaimPoapTooltip: FC<ClaimPoapTooltipProps> = ({
  className = "",
  onClickClose,
}) => (
  <div
    onClick={(e) => {
      e.stopPropagation();
    }}
    className={`  relative flex max-h-[95vh] flex-col gap-y-4
      overflow-hidden rounded-lg border
      border-slateus-400 bg-slateus-700
      p-8
      text-left
      md:max-h-[90vh] ${className}`}
  >
    <button
      className={`absolute right-5 top-5
        flex w-6
        select-none self-end
        hover:brightness-110 active:brightness-90`}
    >
      <Image
        alt="a close button, circular with an x in the middle"
        draggable={false}
        onClick={onClickClose}
        src={closeSvg as StaticImageData}
        width={24}
      />
    </button>
    <div className="flex select-none justify-center">
      <Image
        alt="the Proof of Attendance (POAP) logo"
        className="h-20 w-20 cursor-pointer select-none rounded-full"
        src={logoPoapSvg as StaticImageData}
        height={64}
        width={64}
      />
    </div>
    <TooltipTitle>ultra sound POAP</TooltipTitle>
    <div className="flex flex-col gap-y-4 overflow-y-scroll">
      <TooltipText>
        The ultra sound money meme spreads at L0, via humans. This exclusive
        POAP is a small reward for early meme spreaders.
      </TooltipText>
      <LabelText>eligibility</LabelText>
      <TooltipText inline={true}>
        <ul className="list-inside list-decimal">
          <li>Part of the fam pre-merge.</li>
          <li>Had 8+ fam followers in a recent snapshot.</li>
          <li>One of the first 1,559 to claim.</li>
        </ul>
      </TooltipText>
      <LabelText>Fam</LabelText>
      <Twemoji>
        <TooltipText>
          The fam are{" "}
          <a
            href="https://ultrasound.money/#fam"
            rel="noreferrer"
            target="_blank"
          >
            <LinkText>5,000+ supporters</LinkText>
          </a>{" "}
        </TooltipText>
      </Twemoji>
      <LabelText>benefits</LabelText>
      <TooltipText>
        Beyond pride and glory, POAP holders get priority access to the{" "}
        <a
          href="https://ultrasound.money/#discord"
          rel="noreferrer"
          target="_blank"
        >
          <LinkText>ultra sound Discord.</LinkText>
        </a>
      </TooltipText>
    </div>
  </div>
);

type ClaimPoapProps = {
  className?: string;
  refreshClaimStatus: () => void;
  setTwitterAuthStatus: Dispatch<SetStateAction<TwitterAuthStatus>>;
  twitterAuthStatus: TwitterAuthStatus;
};

type ClaimStatus = "sending" | "invalid-address" | "error" | "sent" | "init";

const ClaimPoap: FC<ClaimPoapProps> = ({
  className,
  refreshClaimStatus,
  twitterAuthStatus,
  setTwitterAuthStatus,
}) => {
  // const [, setAuthFromSection] = useAuthFromSection();
  const [walletId, setWalletId] = useState<string>("");
  const [claimStatus, setClaimStatus] = useState<ClaimStatus>("init");

  return (
    <WidgetBackground
      className={`
          flex max-w-3xl flex-col justify-between
          ${className}
        `}
    >
      <div className="relative flex items-start justify-between"></div>
    </WidgetBackground>
  );
};

type RecentCliamAccount = {
  bio: string;
  claimed_on: DateTimeString;
  fam_follower_count: number;
  follower_count: number;
  handle: string;
  linkables: Linkables | null;
  name: string;
  profile_image_url: string | null;
  twitter_id: string;
};

type PoapsClaimed = {
  count: number;
  index: number;
  latest_claimers: RecentCliamAccount[];
};

const Claimer: FC<{ handle: string; src: string | null; index: number }> = ({
  handle,
  index,
  src,
}) => {
  const [imgSrc, setImgSrc] = useState<string | StaticImageData | null>(src);

  // call back function: if setting img src load failed will load local question svg image instead.
  const onImageError = useCallback(() => {
    setImgSrc(questionMarkSvg as StaticImageData);
  }, []);
  return (
    <a
      href={`https://twitter.com/${handle}`}
      rel="noreferrer"
      target="_blank"
      className={` relative mt-0.5 ${index !== 0 ? "-ml-2" : ""}
        h-[40px] w-[40px] min-w-[40px]
        rounded-full
        border border-slateus-200
        hover:brightness-90
        active:brightness-75`}
      style={{ zIndex: 10 - index }}
    >
      <Image
        alt={`profile image of ${handle}`}
        className={"max-h-[40px] max-w-[40px] select-none rounded-full"}
        onError={onImageError}
        src={imgSrc === null ? (questionMarkSvg as StaticImageData) : imgSrc}
        layout="fill"
        sizes="40px"
      />
    </a>
  );
};

const PoapSection: FC<{
  setTwitterAuthStatus: Dispatch<SetStateAction<TwitterAuthStatus>>;
  twitterAuthStatus: TwitterAuthStatus;
}> = ({ setTwitterAuthStatus, twitterAuthStatus }) => {
  const { data: poapsClaimed, mutate } = useSWR<PoapsClaimed, Error>(
    `${SharedConfig.usmDomainFromEnv()}/api/v2/fam/poap/claimed`,
    fetchJsonSwr,
  );
  const { ref, inView } = useInView({ threshold: 1 });
  const [animatePoap, setAnimatePoap] = useState(true);
  const animationTimeoutId = useRef<number>();

  useEffect(() => {
    if (inView) {
      const timeoutId = window.setTimeout(() => {
        setAnimatePoap(false);
      }, 3000);

      return () => window.clearTimeout(timeoutId);
    }
  }, [inView]);

  const id: AuthFromSection = "poap";

  const handleRefreshClaimStatus = useCallback(() => {
    mutate().catch(captureException);
  }, [mutate]);

  const handleClickPoap = useCallback(() => {
    if (animatePoap) {
      setAnimatePoap(false);
      if (typeof animationTimeoutId.current === "number") {
        window.clearTimeout(animationTimeoutId.current);
      }
      return;
    }

    setAnimatePoap(true);
    animationTimeoutId.current = window.setTimeout(() => {
      setAnimatePoap(false);
    }, 5000);
  }, [animatePoap]);

  return (
    <section className="px-4 md:px-16" id={id}>
      <SectionTitle className="mt-16 pt-16" link="poap" subtitle="only 1,559">
        ultra sound POAP
      </SectionTitle>

      <div className="my-12 flex justify-center">
        <div
          className="flex cursor-pointer select-none"
          ref={ref}
          onClick={handleClickPoap}
        >
          <Image
            className="select-none"
            alt="image from the ultra sound money poap given out to pre-merge fam"
            src={animatePoap ? ultraSoundPoapGif : ultraSoundPoapStill}
            width={144}
            height={144}
          />
        </div>
      </div>
      <div className="grid auto-rows-min gap-4 lg:grid-cols-2">
        <WidgetBackground className="flex flex-col gap-y-8 overflow-hidden">
          <div className="flex flex-col gap-y-4">
            <LabelText>claims</LabelText>
            <QuantifyText className="text-3xl">
              <SkeletonText width="4rem">
                {poapsClaimed === undefined
                  ? undefined
                  : Format.formatZeroDecimals(poapsClaimed.count)}
              </SkeletonText>
              <span className="text-slate-200">/1,559</span>
            </QuantifyText>
          </div>
          <div className="flex flex-col gap-y-4">
            <LabelText>latest claimers</LabelText>
            <div
              className={`flex w-full overflow-x-scroll pb-2 ${scrollbarStyles["styled-scrollbar"]} ${scrollbarStyles["styled-scrollbar-horizontal"]}`}
            >
              {poapsClaimed?.latest_claimers
                .slice(0, 10)
                .map((claimer, index) => (
                  <Claimer
                    key={claimer.twitter_id}
                    handle={claimer.handle}
                    src={claimer.profile_image_url}
                    index={index}
                  />
                ))}
            </div>
          </div>
        </WidgetBackground>
        <WidgetErrorBoundary title="claim POAP">
          <ClaimPoap
            className="col-start-1"
            refreshClaimStatus={handleRefreshClaimStatus}
            twitterAuthStatus={twitterAuthStatus}
            setTwitterAuthStatus={setTwitterAuthStatus}
          />
        </WidgetErrorBoundary>
        <WidgetErrorBoundary title="Eligible Handles">
          <div className="row-span-2 lg:col-start-2 lg:row-start-1">
            Add EligibleHandles Here{" "}
          </div>
        </WidgetErrorBoundary>
      </div>
    </section>
  );
};

export { PoapSection, ClaimPoapTooltip, TooltipText, ClaimPoap };
