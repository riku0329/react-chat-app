import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";


import { sendMessage } from "../../firebase/firebase.utils";

import { ASH, BLACK, LIGHTER_GREY, DARK_GREY } from "../../utils/constans";

const MessageFormContainer = styled.div`
  background-color: ${BLACK};
  height: 5rem;
  border-radius: 0 0 5px 5px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const MessageInput = styled.input`
  flex: 5;
  margin-left: 1rem;
  height: 2rem;
  width: 45rem;
  padding-left: 1rem;
  color: ${ASH};
  outline: none;
  border: none;
  border-radius: 4px;
  display: block;
  font-size: 14px;
  background-color: ${DARK_GREY};
  &:hover,
  &:active {
  }

  @media screen and (max-width: 800px) {
    width: 17rem;
  }
`;

const MessageButton = styled.button`
  flex:1;
  margin-bottom: 1rem;
  height: 2rem;
  border-radius: 4px;
  letter-spacing: 0.5px;
  width: 4rem;
  cursor: pointer;
  outline: none;
  color: white;
  border: none;
  background-color: #4285f4;
  &:hover {
    background-color: #357ae8;
  }
`;

const MessageStyles = styled.div`
  display: flex;
`;

const MessageForm = ({ currentUser, currentChannel }) => {
  const [addMessage, setAddMessage] = useState({
    content: ""
  });


  const { content } = addMessage;
  const handleChange = event => {
    const { name, value } = event.target;
    setAddMessage({ ...addMessage, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (content.length < 0) return;
    try {
      await sendMessage(content, currentUser, currentChannel);
      setAddMessage({
        content: ""
      });
    } catch (error) {
      console.log("error creating message", error.message);
    }
  };

  return (
    <MessageFormContainer>
      <form onClick={handleSubmit}>
        <MessageStyles>
          <MessageInput
            type="text"
            name="content"
            value={content}
            placeholder="send Message"
            onChange={handleChange}
            autoComplete="off"
          />
          <MessageButton>send</MessageButton>
        </MessageStyles>
      </form>
    </MessageFormContainer>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  currentChannel: state.channel.currentChannel
});

export default connect(mapStateToProps, null)(MessageForm);
