import { StoryObj } from "@storybook/react";
import { useTwitterAuthStatus } from "../../../../hooks/use-twitter-auth";
import React, { FC, useState } from "react";

import { PoapSection } from "../../../../dashboards/sections/PoapSection";
import { TwitterAuthStatus } from "../../../../hooks/use-twitter-auth";

const meta = {
  title: "Sections/PoapSection",
  component: PoapSection,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
const PoapSectionWrapper: FC = () => {
  const [twitterAuthStatus, setTwitterAuthStatus] = useTwitterAuthStatus();

  return (
    <PoapSection
      twitterAuthStatus={twitterAuthStatus}
      setTwitterAuthStatus={setTwitterAuthStatus}
    />
  );
};

const defaultTwitterAuthStatus: TwitterAuthStatus = { type: "init" };

export const Default: Story = {
  args: {
    twitterAuthStatus: defaultTwitterAuthStatus,
    setTwitterAuthStatus: () => {},
  },
  render: (args) => {
    const [twitterAuthStatus, setTwitterAuthStatus] = useState(
      args.twitterAuthStatus,
    );

    return (
      <PoapSection
        twitterAuthStatus={twitterAuthStatus}
        setTwitterAuthStatus={setTwitterAuthStatus}
      />
    );
  },
};
