import range from "lodash/range";
import type { FC, RefObject } from "react";
import { memo, useCallback, useRef, useState } from "react";
import type { TimeFrame } from "../../utils/time-frames";
import { usePopper } from "react-popper";
import WidgetErrorBoundary from "../WidgetErrorBoundary";
import type { Unit } from "../../constants/denomination";
import { useAdminToken } from "../../hooks/use-admin-token";
import scrollbarStyles from "../../styles/Scrollbar.module.scss";
import { useContractsFreshness } from "../../api/contracts";
import type { OnClick } from "../TimeFrameControl";
import { divide } from "lodash";
import { decodeGroupedAnalysis1, useGroupedAnalysis1 } from "../../api/grouped-analysis-1";
import { Leaderboards, LeaderboardEntry } from "../../api/leaderboards";
import { useActiveBreakpoint } from "../../utils/use-active-breakpoint";
import BurnGroupBase from "../BurnGroupBase";
import LeaderboardRow from "./LeaderboardRow";
import Modal from "../Modal";

const BurnLeaderboard: FC = () => {
  return <div>BurnLeaderboard</div>
}

export default memo(BurnLeaderboard);
