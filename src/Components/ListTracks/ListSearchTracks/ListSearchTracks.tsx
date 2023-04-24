import React, { useEffect, useState } from "react";
import { TrackItem } from "../TrackItem/TrackItem";
import { Container, ContainerLoading, Subtitle, Wrapper } from "../styles";
import { ITracks } from "interfaces/ITrackList";

import { usePlayingTrackContext } from "contexts/PlayingTrackContext";
import { useSearchContext } from "contexts/SearchContext";
import { getSearchMusics } from "services/spotify";
import { getToken } from "hooks/useToken";
import { CircularProgress } from "@mui/material";

type AlbumListProps = {
  title: string;
};

export function AlbumList(props: AlbumListProps) {
  const { setPlayingTrack } = usePlayingTrackContext();
  const [searchMusicData, setSearchMusicData] = useState<ITracks>();
  const { search } = useSearchContext();

  const token = getToken();
  useEffect(() => {
    if (token?.token && search.length) {
      getSearchMusics(token.token, setSearchMusicData, search);
    }
  }, [token?.token, search]);

  return searchMusicData ? (
    <Container>
      <Subtitle> {props.title} </Subtitle>
      <Wrapper>
        {searchMusicData?.items.map((track) => {
          return (
            <TrackItem
              handlePlay={() => setPlayingTrack(track)}
              title={track.name}
              description={track.artists[0].name}
              image={track.album.images[0].url}
              key={track.id}
            />
          );
        })}
      </Wrapper>
    </Container>
  ) : (
    <ContainerLoading>
      <CircularProgress color="success" />
    </ContainerLoading>
  );
}
