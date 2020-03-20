import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { firestore, messageListener } from "../../firebase/firebase.utils";

import { DARK_BLACK, BLACK } from "../../utils/constans";
import { getMessages } from "../../redux/message/message.actions";

import MessageForm from "./message-form.component";
import Messages from "./meeages.component";

const MessageContainer = styled.div`
  background-color: ${DARK_BLACK};
  padding: 1rem;
`;

const MessageBox = styled.div`
  background-color: ${BLACK};
  height: 38rem;
  border-radius: 5px 5px 0 0;
  overflow-y: scroll;
`;

const Message = ({
  getMessages,
  currentChannel,
  messages,
  searchResults,
  searchTherm
}) => {
  useEffect(() => {
    if (currentChannel) {
      const messageRef = firestore
        .collection("channel")
        .doc(currentChannel.id)
        .collection("message");
      const loadMessages = messageRef
        .orderBy("timestamp", "asc")
        .onSnapshot(async snapShot => {
          const messageMap = messageListener(snapShot);
          getMessages(messageMap);
        });
      return () => {
        loadMessages();
      };
    }
    return;
  }, [getMessages, currentChannel]);
  return (
    <MessageContainer>
      <MessageBox>
        {searchTherm ? (
          searchResults.map(result => (
            <Messages key={result.id} message={result} />
          ))
        ) : messages ? (
          messages.map(message => (
            <Messages key={message.id} message={message} />
          ))
        ) : (
          <p>send message</p>
        )}
      </MessageBox>
      <MessageForm />
    </MessageContainer>
  );
};

const mapStateToProps = state => ({
  currentChannel: state.channel.currentChannel,
  messages: state.message.messages,
  searchTherm: state.message.searchTherm,
  searchResults: state.message.searchResults
});

const mapDispatchToProps = dispatch => ({
  getMessages: message => dispatch(getMessages(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(Message);
