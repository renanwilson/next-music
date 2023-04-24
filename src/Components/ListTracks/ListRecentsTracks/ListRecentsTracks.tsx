import { usePlayingTrackContext } from "contexts/PlayingTrackContext";
import { IRecentsTracks } from "interfaces/IRecentsTracks";
import { Container, Subtitle, Wrapper } from "../styles";
import { AlbumItem } from "../AlbunsItem/AlbumItem";
import { getToken } from "hooks/useToken";
import { useEffect, useState } from "react";
import { getRecentTracks } from "services/spotify";

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
  return (
    <Container>
      <Subtitle> {props.title} </Subtitle>
      <Wrapper>
        {recentsTracks?.map((item) => {
          return (
            <AlbumItem
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
  );
}
