import type { FC, ReactNode } from "react";
import { useContext } from "react";
import Skeleton from "react-loading-skeleton";
import { FeatureFlagsContext } from "../../contexts/FeatureFlagContext";

type Props = {
  children: ReactNode;
  className?: string;
  inline?: boolean;
  width?: string;
};

const SkeletonText: FC<Props> = ({
  children,
  className = "",
  inline = true,
  width = 100,
}) => {
  const { previewSkeletons } = useContext(FeatureFlagsContext);
  return children === undefined || previewSkeletons ? (
    <Skeleton className={className} inline={inline} width={width} />
  ) : (
    <>{children} </>
  );
};

export default SkeletonText;
