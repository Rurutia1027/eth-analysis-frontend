import type { CSSProperties, FC, ReactNode } from "react";
import { createElement } from "react";
import BodyText from "./TextNext/BodyText";

export type FontWeight =
  | "font-normal"
  | "font-light"
  | "font-extralight"
  | "font-medium";

type BaseTextProps = {
  children: ReactNode;
  className?: string;
  color?: string;
  font: "font-roboto" | "font-inter";
  inline?: boolean;
  lineHeight?: string;
  size?: string;
  style?: CSSProperties;
  tooltip?: string;
  weight?: FontWeight;
};

export const BaseText: FC<BaseTextProps> = ({
  children,
  className = "",
  color = "text-white",
  font,
  inline = true,
  lineHeight = "leading-normal",
  size = "",
  style,
  tooltip,
  weight = "font-light",
}) =>
  createElement(
    inline ? "span" : "p",
    {
      className: `${font} ${className} ${color} ${weight} ${size} ${lineHeight}`,
      style: style,
      title: tooltip,
    },
    children,
  );
