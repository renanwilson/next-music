import axios from "axios";
import { IRecentsTracks } from "interfaces/IRecentsTracks";
import { ITracks } from "interfaces/ITrackList";
import { UserProfile } from "interfaces/IUserProfile";
import { Dispatch, SetStateAction } from "react";

export const spotifyService = axios.create({
  baseURL: "https://api.spotify.com/v1",
});
export const getUserDetails = async (
  token: string | null | undefined,
  setData: Dispatch<SetStateAction<UserProfile | undefined>>
) => {
  await spotifyService
    .get("/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((resp) => setData(resp.data));
};
export const getSearchMusics = async (
  token: string | null | undefined,
  setData: Dispatch<SetStateAction<ITracks | undefined>>,
  search: string
) => {
  await spotifyService
    .get("/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: search,
        type: "track",
        limit: 10,
      },
    })
    .then((resp) => setData(resp.data.tracks));
};
export const getRecentTracks = async (
  token: string | null | undefined,
  setData: Dispatch<SetStateAction<IRecentsTracks[]>>
) => {
  await spotifyService
    .get("/me/top/tracks", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        time_range: "short_term",
        limit: 10,
      },
    })
    .then((resp) => setData(resp.data.items));
};
