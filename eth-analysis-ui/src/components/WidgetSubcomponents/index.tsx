import type { FC, HTMLAttributes, ReactNode } from "react";

export type BackgroundProps = {
  children: ReactNode;
  className?: HTMLAttributes<HTMLDivElement>["className"];
};

export const WidgetBackground: FC<BackgroundProps> = ({
  children,
  className,
}) => (
  <div className={`rounded-lg bg-slateus-700 p-8 ${className ?? ""}`}>
    {children}
  </div>
);

export const WidgetTitle: FC<{
  children: ReactNode;
  className?: string;
}> = ({ className, children }) => (
  <span
    className={`tracking-widgest font-inter text-xs font-light uppercase text-slateus-200 ${
      className ?? ""
    }`}
  >
    {children}
  </span>
);
