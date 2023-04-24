import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: var(--bg);
  padding: 0 140px 40px 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Image = styled.img`
  width: 200px;
`;
export const Avatar = styled.img`
  width: 3rem;
  border-radius: 100px;
`;
export const Name = styled.h1`
  color: var(--terceary);
  font-size: var(--fontMedium);
`;
export const Chip = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: white 1px solid;
  padding: 8px;
  border-radius: 100px;
`;
