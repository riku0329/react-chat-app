import React from "react";
import styled from "styled-components";
import { LIGHT_DARK } from "../../utils/constans";

const MessageContainer = styled.div`
  background-color: ${LIGHT_DARK};
`;

const Message = () => {
  return <MessageContainer>Message</MessageContainer>;
};

export default Message;
