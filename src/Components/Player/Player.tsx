import { useEffect, useState } from "react";
import SpotifyPlayer from "react-spotify-web-playback";

type Props = {
  trackUri: string;
  accessToken: string;
};
export function Player({ trackUri, accessToken }: Props) {
  const [play, setPlay] = useState(false);
  useEffect(() => {
    setPlay(true);
  }, [trackUri]);
  return (
    <div>
      <SpotifyPlayer
        token={accessToken}
        showSaveIcon
        callback={(state) => {
          if (!state.isPlaying) setPlay(false);
        }}
        play={play}
        uris={trackUri ? [trackUri] : []}
        styles={{
          bgColor: "#161616",
          color: "#ffffff",
          trackArtistColor: "#ccc",
          trackNameColor: "#ffffff",
        }}
      />
    </div>
  );
}
