import React, { ReactNode } from "react";
import { Container } from "./styles";

type BaseProps = {
  children: ReactNode;
};

export function Base(props: BaseProps) {
  return <Container> {props.children} </Container>;
}
