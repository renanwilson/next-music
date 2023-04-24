import { IconButton } from "@mui/material";
import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  background-color: var(--primary);
  border-radius: 8px;
`;

export const Button = styled(IconButton)`
  display: none !important;
  background-color: #1db954 !important;
  border: none;
  color: #000000 !important;
  position: absolute !important;
  z-index: 1 !important;
  margin-left: 128px !important;
  margin-top: 140px !important;
  padding: 16px;
  border-radius: 50%;
  ${Container}:hover & {
    display: inline-flex !important;
  }
`;
export const Image = styled.img`
  width: 200px;
  height: 200px;
  margin-top: 10px;
  position: relative;
  border-radius: 8px;
`;
export const Title = styled.h3`
  display: flex;
  font-size: var(--fontMedium);
  color: var(--terceary);
  margin: 10px;
`;
export const Description = styled.h4`
  display: flex;
  font-size: var(--fontSmall);
  color: var(--secundary);
  margin-bottom: 1rem;
`;
