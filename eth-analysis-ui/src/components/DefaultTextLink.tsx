import type { FC, ReactNode } from "react";
import DefaultLink from "./DefaultLink";

type Props = {
  children: ReactNode;
  className?: string;
  href?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

const DefaultTextLink: FC<Props> = ({
  children,
  className = "",
  href,
  onMouseEnter,
  onMouseLeave,
}) => (
  <DefaultLink
    className={`
    ${href !== undefined ? "hover:underline" : ""} ${className}`}
    href={href}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {children}
  </DefaultLink>
);

export default DefaultTextLink;
