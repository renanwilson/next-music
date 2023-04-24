import React from "react";
import { ListTrackPage } from "./ListTrack/ListTrackPage";
import { PlayingTrackContextProvider } from "contexts/PlayingTrackContext";
import { SearchContextProvider } from "contexts/SearchContext";
import { Base } from "template/base/base";

export default function ListTrack() {
  return (
    <PlayingTrackContextProvider>
      <SearchContextProvider>
        <Base>
          <ListTrackPage />
        </Base>
      </SearchContextProvider>
    </PlayingTrackContextProvider>
  );
}
