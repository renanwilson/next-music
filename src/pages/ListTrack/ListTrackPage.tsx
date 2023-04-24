import React, { useEffect, useState } from "react";

import { SearchBar } from "../../Components/SearchBar/SearchBar";
import { Container, Footer } from "./styles";

import { useSearchContext } from "contexts/SearchContext";

import { getUserDetails } from "services/spotify";
import { UserProfile } from "interfaces/IUserProfile";
import { Header } from "Components/Header/Header";

import { getToken, setToken } from "hooks/useToken";

import { Player } from "Components/Player/Player";
import { useGetParams } from "hooks/useGetParams";
import { usePlayingTrackContext } from "contexts/PlayingTrackContext";
import { AlbumList } from "Components/ListTracks/ListSearchTracks/ListSearchTracks";
import { ListRecentsTracks } from "Components/ListTracks/ListRecentsTracks/ListRecentsTracks";

export function ListTrackPage() {
  const [userProfile, setUserProfile] = useState<UserProfile>();
  const { playingTrack } = usePlayingTrackContext();

  const urlValue = useGetParams("access_token");
  const { search } = useSearchContext();

  setToken(urlValue?.urlValue);
  const token = getToken();
  useEffect(() => {
    getUserDetails(token?.token, setUserProfile);
  }, [token?.token]);

  return (
    <Container>
      <Header data={userProfile} />
      <SearchBar />
      {search.length ? (
        <AlbumList title={`Resultados encontrados para "${search}"`} />
      ) : (
        <ListRecentsTracks title="Top musics" />
      )}
      {playingTrack ? (
        <Footer>
          <Player
            accessToken={token?.token as string}
            trackUri={playingTrack?.uri as string}
          />
        </Footer>
      ) : null}
    </Container>
  );
}
