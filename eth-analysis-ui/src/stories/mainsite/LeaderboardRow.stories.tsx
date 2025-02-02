import { Meta, StoryObj } from "@storybook/react";
import LeaderboardRow from "../../mainsite/components/BurnLeaderboard/LeaderboardRow";
import { FeatureFlagsContext, defaults } from "../../feature-flags";
import type { Unit } from "../../denomination";

const meta: Meta<typeof LeaderboardRow> = {
  title: "MainSite/LeaderboardRow",
  component: LeaderboardRow,
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: "#001f3d", padding: "20px" }}>
        <FeatureFlagsContext.Provider value={defaults}>
          <Story />
        </FeatureFlagsContext.Provider>
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof LeaderboardRow>;

export const Default: Story = {
  args: {
    address: "0x1234567890abcdef1234567890abcdef12345678",
    adminToken: "admin-token",
    category: "eth-transfers",
    detail: "Some detail about this entry",
    fees: 1500,
    onClickImage: () => alert("Image clicked"),
    onMouseEnterImage: (ref) => console.log("Mouse entered", ref),
    onMouseLeaveImage: () => console.log("Mouse left"),
    image: "/path/to/image.svg",
    isBot: false,
    name: "Leaderboard Name",
    type: "eth-transfers",
    unit: "eth" as Unit,
  },
};

// You can create more stories if needed, for example:

export const NoAddress: Story = {
  args: {
    address: undefined,
    name: "No address provided",
    fees: 1000,
  },
};

export const SkeletonLoading: Story = {
  args: {
    address: undefined,
    name: undefined,
    fees: undefined,
  },
};
