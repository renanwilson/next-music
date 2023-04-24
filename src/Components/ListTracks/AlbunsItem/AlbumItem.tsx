import React from "react";
import { Container, Title, Description, Image, Button } from "./styles";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
type Props = {
  title: string;
  description: string;
  image: string;
  handlePlay: () => void;
};
export function AlbumItem({ title, description, image, handlePlay }: Props) {
  return (
    <Container>
      <Image src={image} />
      <Button size="large" className="button" onClick={() => handlePlay()}>
        <PlayArrowIcon fontSize="large" />
      </Button>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
}
