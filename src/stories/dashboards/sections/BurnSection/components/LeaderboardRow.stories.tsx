import { StoryObj } from "@storybook/react";
import LeaderboardRow from "../../../../../components/BurnLeaderboard/LeaderboardRow";
import { CategoryId } from "../../../../../api/burn-categories";
import discordSvg from "../../../../assets/discord.svg";
import { StaticImageData } from "next/legacy/image";


const meta = {
 title: "Sections/BurnSection/components/LeaderboardRow",
 component: LeaderboardRow,
 parameters: {
  layout: "fullscreen",
 },
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
 args: {
  address: "0x000000633b68f5D8D3a86593ebB815b4663BCBe0",
  adminToken: "adminToken field",
  category: "defi" as CategoryId,
  detail: "detail field",
  fees: 21831919 as number,
  onClickImage: () => { },
  image: discordSvg,
 }
};
