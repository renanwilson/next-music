import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Button = styled.button`
  background-color: #1ed760;
  font-size: 2rem;
  font-weight: 700;
  border: none;
  width: 100%;
  height: 100%;
  &:hover {
    cursor: pointer;
  }
`;
export const Link = styled.a`
  padding: 34px;
  background-color: #1ed760;
  font-size: 2rem;
  font-weight: 700;
  border-radius: 36%;
  font-family: "Roboto", sans-serif;
`;
