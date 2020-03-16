import React from "react";
import styled from "styled-components";
import { LIGHT_DARK, BLACK, DARK_BLACK } from "../../utils/constans";

import MessageBox from "./message-box.component";
import MessageForm from "./message-form.component";

const MessageContainer = styled.div`
  background-color: ${DARK_BLACK};
  padding: 1rem;
`;

const Message = () => {
  return (
    <MessageContainer>
      <MessageBox />
      <MessageForm />
    </MessageContainer>
  );
};

export default Message;
