import React from "react";
import { Container, Title, Description, Image } from "./styles";

type Props = {
  title: string;
  description: string;
  image: string;
  handlePlay: () => void;
};
export function TrackItem({ title, description, image, handlePlay }: Props) {
  return (
    <Container onClick={() => handlePlay()}>
      <Image src={image} alt="Imagem" />

      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
}
