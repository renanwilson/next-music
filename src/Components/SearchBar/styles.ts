import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 var(--paddingMain);
  margin-bottom: 40px;
`;
export const Label = styled.label`
  color: var(--terceary);
  font-size: var(--fontMedium);
  margin-bottom: 10px;
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
  color: var(--white);
  outline: 0;
`;
