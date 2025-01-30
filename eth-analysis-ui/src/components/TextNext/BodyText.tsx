import type { FC, ReactNode } from "react";
import { BaseText } from "../Texts";

type Props = {
  children: ReactNode;
  className?: string;
  inline?: boolean;
};

const BodyText: FC<Props> = ({ children, className, inline }) => (
  <BaseText
    font="font-inter"
    className={className}
    size="text-base md:text-lg"
    inline={inline}
  >
    {children}
  </BaseText>
);

export default BodyText;