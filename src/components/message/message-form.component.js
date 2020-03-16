import React from "react";
import styled from "styled-components";
import { LIGHT_DARK, BLACK, LIGHT_BLACK } from "../../utils/constans";

const MessageFormContainer = styled.div`
  background-color: ${BLACK};
  height: 5rem;
`;

const MessageForm = () => {
  return <MessageFormContainer>hello</MessageFormContainer>;
};

export default MessageForm;
