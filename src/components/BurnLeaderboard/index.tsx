import range from "lodash/range";
import type { FC, RefObject } from "react";
import { memo, useCallback, useRef, useState } from "react";
import type { TimeFrame } from "../../utils/time-frames";
import { usePopper } from "react-popper";
import WidgetErrorBoundary from "../WidgetErrorBoundary";
import type { Unit } from "../../constants/denomination";
import { useAdminToken } from "../../hooks/use-admin-token";
import scrollbarStyles from "../../../styles/Scrollbar.module.scss";
import { useContractsFreshness } from "../../api/contracts";
import type { OnClick } from "../TimeFrameControl";
import { divide } from "lodash";

type Props = {
  onClickTimeFrame: OnClick;
  timeFrame: TimeFrame;
  unit: Unit;
};

const BurnLeaderboard: FC<Props> = ({ onClickTimeFrame, timeFrame, unit }) => (
  <div></div>
);

export default memo(BurnLeaderboard);
