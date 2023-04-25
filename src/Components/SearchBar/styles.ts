import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 var(--paddingMain);
  margin-bottom: 40px;
  @media (max-width: 1000px) {
    padding: 0 18px;
  }
`;
export const Label = styled.label`
  color: var(--terceary);
  font-size: var(--fontMedium);
  margin-bottom: 10px;
  @media (max-width: 1000px) {
    font-size: var(--fontLarge);
  }
`;
export const Input = styled.input`
  color: var(--secundary);
  height: 70px;
  line-height: var(--fontXLarge);
  padding-bottom: 14px;
  font-size: var(--fontXLarge);
  font-weight: bold;
  border: 0;
  border-bottom: 2px solid var(--secundary);
  background-color: transparent;
  outline: 0;
  @media (max-width: 1000px) {
    box-sizing: unset;
    font-size: 32px;
    line-height: 32px;
    height: 32px;
  }
`;
