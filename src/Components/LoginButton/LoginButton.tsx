import React from "react";

import { Button, Link, Logo } from "./styles";
import Image from "next/image";

export function LoginButtton() {
  const CLIENT_ID = "644c94c28962489b83748755d29459c1";
  const REDIRECT_URI = "http://localhost:3000/list-track";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const SCOPE =
    "streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-top-read";

  return (
    <Link
      href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`}
    >
      <Button>
        Entrar <Logo src="/images/logoSpotifyIcon.png" alt="logo" />
      </Button>
    </Link>
  );
}
