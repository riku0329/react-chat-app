import React from "react";
import styled from "styled-components";
import { LIGHT_DARK, BLACK, DARK_BLACK, LIGHT_BLACK } from "../../utils/constans";

const MessageBoxContainer = styled.div`
  background-color: ${BLACK};
  height: 36rem;
  margin-bottom: 1rem;
`;

const MessageBox = () => {
  return <MessageBoxContainer>hello</MessageBoxContainer>;
};

export default MessageBox;
