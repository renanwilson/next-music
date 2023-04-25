import React from "react";
import { ListTrackPage } from "../template/ListTrack/ListTrackPage";
import { PlayingTrackContextProvider } from "contexts/PlayingTrackContext";
import { SearchContextProvider } from "contexts/SearchContext";
import { Base } from "template/base/base";
import Head from "next/head";

export default function ListTrack() {
  return (
    <>
      <Head>
        <title>Track List</title>
      </Head>
      <PlayingTrackContextProvider>
        <SearchContextProvider>
          <Base>
            <ListTrackPage />
          </Base>
        </SearchContextProvider>
      </PlayingTrackContextProvider>
    </>
  );
}
