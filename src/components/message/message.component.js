import React from "react";
import styled from "styled-components";
import { LIGHT_PURPLE, PURPLE, DARK_GREEN, GREEN, PALE_BLUE } from "../../utils/constans";

const MessageContainer = styled.div`
  background-color: ${PALE_BLUE};
`;

const Message = () => {
  return <MessageContainer>Message</MessageContainer>;
};

export default Message;
