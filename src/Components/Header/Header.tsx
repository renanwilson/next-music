import React from "react";
import { Avatar, Chip, Container, Image, Name } from "./styles";

import { UserProfile } from "interfaces/IUserProfile";

type Props = {
  data?: UserProfile;
};
export function Header({ data }: Props) {
  return (
    <Container>
      <Image src="/images/spotify1.svg" alt="" />
      {data ? (
        <Chip>
          <Avatar src={data?.images[0].url} />
          <Name>{data?.display_name}</Name>
        </Chip>
      ) : null}
    </Container>
  );
}
