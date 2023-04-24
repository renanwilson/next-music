import { IRecentsTracks } from "interfaces/IRecentsTracks";
import { IItems } from "interfaces/ITrackList";
import {
  Dispatch,
  ReactElement,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type PlayingTrackContextProps = {
  playingTrack: IRecentsTracks | IItems | undefined;
  setPlayingTrack: Dispatch<
    SetStateAction<IRecentsTracks | IItems | undefined>
  >;
};
const INITIAL_STATE: PlayingTrackContextProps = {
  playingTrack: undefined,
  setPlayingTrack: () => undefined,
};
type PlayingTrackContextProviderProps = {
  children: ReactElement;
};
export const PlayingTrackContext = createContext(INITIAL_STATE);
export const usePlayingTrackContext = () => useContext(PlayingTrackContext);
export const PlayingTrackContextProvider = ({
  children,
}: PlayingTrackContextProviderProps) => {
  const [playingTrack, setPlayingTrack] = useState<IRecentsTracks | IItems>();
  return (
    <PlayingTrackContext.Provider value={{ playingTrack, setPlayingTrack }}>
      {children}
    </PlayingTrackContext.Provider>
  );
};
