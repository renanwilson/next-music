import React from "react";
import { Container, Title, Description, Image, Button } from "./styles";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
type Props = {
  title: string;
  description: string;
  image: string;
  handlePlay: () => void;
};
export function TrackItem({ title, description, image, handlePlay }: Props) {
  return (
    <Container>
      <Image src={image} alt="Imagem" />
      <Button size="large" className="button" onClick={() => handlePlay()}>
        <PlayArrowIcon fontSize="large" />
      </Button>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
}
