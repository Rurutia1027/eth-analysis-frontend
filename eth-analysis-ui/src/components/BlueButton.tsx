import type { FC, ReactNode } from "react";
import BodyTextV2 from "./TextNext/BodyTextV2";

type Props = {
  children: ReactNode;
};

const BlueButton: FC<Props> = ({ children }) => (
  <button
    className={`
  group
  relative flex h-fit 
  select-none
  rounded-full bg-gradient-to-tr
  from-cyan-400 to-indigo-600 
  px-4 py-2 font-light text-white md:m-0.5 md:py-1.5
  `}
  >
    <BodyTextV2 className="z-10">{children}</BodyTextV2>
    <div
      className={`
     grouped-hover:hidden absolute bottom-[1px] left-[1px] right-[1px]
     top-[1px] rounded-full
     bg-slateus-700`}
    ></div>
  </button>
);

export default BlueButton;
