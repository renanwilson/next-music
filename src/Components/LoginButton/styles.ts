import styled from "styled-components";

export const Button = styled.button`
  background-color: #1ed760;
  font-size: 2rem;
  font-weight: 700;
  border: none;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  &:hover {
    cursor: pointer;
  }
`;
export const Link = styled.a`
  padding: 34px;
  text-decoration: none;
  background-color: #1ed760;
  font-size: 2rem;
  font-weight: 700;
  border-radius: 16px;
  font-family: "Roboto", sans-serif;
`;
export const Logo = styled.img`
  width: 3rem;
`;
