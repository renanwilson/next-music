import { usePlayingTrackContext } from "contexts/PlayingTrackContext";
import { IRecentsTracks } from "interfaces/IRecentsTracks";
import { Container, ContainerLoading, Subtitle, Wrapper } from "../styles";
import { TrackItem } from "../TrackItem/TrackItem";
import { getToken } from "hooks/useToken";
import { useEffect, useState } from "react";
import { getRecentTracks } from "services/spotify";
import { CircularProgress } from "@mui/material";

type ListTracksProps = {
  title: string;
  data?: IRecentsTracks[];
};
export function ListRecentsTracks(props: ListTracksProps) {
  const [recentsTracks, setRecentsTracks] = useState<IRecentsTracks[]>([]);
  const token = getToken();
  useEffect(() => {
    if (token?.token) {
      getRecentTracks(token.token, setRecentsTracks);
    }
  }, [token?.token]);
  const { setPlayingTrack } = usePlayingTrackContext();
  return recentsTracks ? (
    <Container>
      <Subtitle> {props.title} </Subtitle>
      <Wrapper>
        {recentsTracks?.map((item) => {
          return (
            <TrackItem
              handlePlay={() => setPlayingTrack(item)}
              title={item.name}
              description={item.artists[0].name}
              image={item.album.images[0].url}
              key={item.id}
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
