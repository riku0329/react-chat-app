import styled from "styled-components";
import { LIGHT_ASH, OFF_WHITE } from "../../utils/constans";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3rem;
`;

export const FormInput = styled.input`
  outline: none;
  border: 2px solid #c3ccdb;
  border-radius: 4px;
  display: block;
  width: 17rem;
  padding: 10px;
  font-size: 14px;
  margin-bottom: 10px;
  background-color: ${OFF_WHITE};

  &:hover,
  &:active {
    background-color: ${LIGHT_ASH}
  }

  @media screen and (max-width: 800px) {
    width: 17rem;
  }
`;
