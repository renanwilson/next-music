import React from "react";
import { Container, Label, Input } from "./styles";
import { useSearchContext } from "contexts/SearchContext";

export function SearchBar() {
  const { setSearch, search } = useSearchContext();
  return (
    <Container>
      <Label>Busque por musicas</Label>
      <Input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="O que você quer ouvir?"
      />
    </Container>
  );
}
