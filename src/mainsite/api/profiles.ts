import useSWR from "swr";
import { fetchJsonSwr } from "./fetchers";

export type LinkableUrl = {
  display_url: string;
  end: number;
  expanded_url: string;
  start: number;
  url: string;
};

export type LinkableMention = {
  start: number;
  end: number;
  username: string;
};

export type LinkableCashtag = { start: number; end: number; tag: string };

export type LinkableHashtag = { start: number; end: number; tag: string };

export type Linkables = {
  cashtags?: LinkableCashtag[];
  hashtags?: LinkableHashtag[];
  mentions?: LinkableMention[];
  urls?: LinkableUrl[];
};

export type FamProfile = {
  bio: string | undefined;
  famFollowerCount: number;
  followersCount: number;
  links: Linkables | undefined;
  name: string;
  profileImageUrl: string;
  profileUrl: string;
  handle: string;
};

type ProfilesResponse = {
  count: number;
  profiles: FamProfile[];
};

export const useProfiles = () => {
  const { data } = useSWR<ProfilesResponse>("/api/fam/profiles", fetchJsonSwr);

  return data;
};

export const useAllProfiles = () => {
  const { data } = useSWR<ProfilesResponse>(
    "/api/fam/all-profiles",
    fetchJsonSwr,
  );

  return data;
};

export type SpriteSheetResponse = {
  coordinates: {
    [key: string]: { x: number; y: number; width: number; height: number };
  };
  properties: { width: number; height: number };
  spriteSheet: string;
};

export const useSpriteSheet = () => {
  const { data } = useSWR<SpriteSheetResponse>(
    "/api/fam/sprite-sheet-meta",
    fetchJsonSwr,
  );

  return data;
};
