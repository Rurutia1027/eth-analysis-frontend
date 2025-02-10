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

// import components
import { BaseText, TooltipTitle } from "../../../components/Texts";
// import LinkText

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
import LabelText from "../../../components/TextNext/LabelText";
import Twemoji from "../../../components/Twemoji";

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
          The fam are{""}
          <a
            href="https://ultrasound.money/#fam"
            rel="noreferrer"
            target="_blank"
          >
            Text Content
          </a>
        </TooltipText>
      </Twemoji>
    </div>
  </div>
);

const PoapSection: FC = () => {
  return (
    <>
      <div>PoapSection</div>
    </>
  );
};

export { PoapSection, ClaimPoapTooltip, TooltipText };
