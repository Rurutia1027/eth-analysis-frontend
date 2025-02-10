import type { FC } from "react";
import { useCallback } from "react";
import { useContext, useState } from "react";
import type { Flag } from "../contexts/FeatureFlagContext";
import {
  displayFlagMap,
  FeatureFlagsContext,
  flags,
} from "../contexts/FeatureFlagContext";
import { useAdminToken } from "../hooks/use-admin-token";
import { BaseText } from "./Texts";
import ToggleSwitch from "./ToggleSwitch";
import { WidgetTitle } from "./WidgetSubcomponents";

const AdminTools: FC<{
  setFlag: ({ flag, enabled }: { flag: Flag; enabled: boolean }) => void;
}> = ({ setFlag }) => {
  const adminToken = useAdminToken();
  const [minimized, setMinimized] = useState(false);
  const featureFlags = useContext(FeatureFlagsContext);

  const handleMinimize = useCallback(() => {
    setMinimized((minimized) => !minimized);
  }, []);

  if (adminToken === undefined) {
    console.log("admin token not defined!");
    return null;
  }

  return (
    <div
      className={`
        fixed bottom-4 left-4
        z-20 rounded-lg
        border-2 border-slate-600
        bg-slateus-700 p-4
        transition-transform
        ${minimized ? "translate-y-[88%]" : ""}
      `}
    >
      <div className="flex items-center justify-between">
        <WidgetTitle>feature flags</WidgetTitle>
        <div onClick={handleMinimize}>
          <BaseText
            font="font-roboto"
            className={`px-2 text-xl ${minimized ? "hidden" : ""}`}
          >
            ↓
          </BaseText>
          <BaseText
            font="font-roboto"
            className={`px-2 text-xl ${minimized ? "" : "hidden"}`}
          >
            ↑
          </BaseText>
        </div>
      </div>
      {flags.map((flag) => (
        <div
          key={flag}
          className="mt-4 flex items-center justify-between gap-x-4"
        >
          <span className="mr-4 text-white">{displayFlagMap[flag]}</span>
          <ToggleSwitch
            checked={featureFlags[flag]}
            onToggle={(enabled) => setFlag({ flag, enabled })}
          ></ToggleSwitch>
        </div>
      ))}
    </div>
  );
};

export default AdminTools;
