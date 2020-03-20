import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import moment from "moment";
import {
  DARK_GREY,
  OX,
  LIGHTER_GREY,
  LIGHT_BLACK,
  PRIME_GREEN,
  OFF_WHITE,
} from "../../utils/constans";

const MessagesContainer = styled.div`
  display: grid;
  grid-template-columns: 3rem 3rem 1fr;
  grid-template-rows: 1rem 1.5rem 1fr;
  width: 30%;
  background-color: ${DARK_GREY};
  height: 5rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  border-radius: 20px;
  ${({ active }) =>
    active &&
    `
      color: ${LIGHT_BLACK};
      background-color: ${PRIME_GREEN};
      margin: 1rem 0 1rem auto;
  `}
`;

const PhotoStyles = styled.div`
  grid-column: 1/ 2;
  grid-row: 1;
  margin: 5px;
`;

const UserIcon = styled.img`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  margin-right: 6px;
`;
const UserNameStyles = styled.div`
  grid-column: 2;
  grid-row: 1;
  color: ${OX};

  ${({ active }) =>
    active &&
    `
      color: ${OFF_WHITE};
  `}
`;
const TimeStampStyles = styled.div`
  grid-column: 3;
  grid-row: 1;
  font-size: 0.8rem;
  color: ${LIGHTER_GREY};

  ${({ active }) =>
    active &&
    `
      color: ${LIGHT_BLACK};
  `}
`;
const MessageStyles = styled.div`
  grid-column: 2;
  grid-row: 2 / 4;
`;

const Messages = ({ message, currentUser }) => {
  const { photoURL, content, displayName, timestamp, userId } = message;
  const { id } = currentUser;

  const timeFromNow = timestamp => moment(timestamp).format("MM-DD HH:mm");

  return (
    <MessagesContainer active={userId === id}>
      <PhotoStyles>
        <UserIcon src={photoURL} />
      </PhotoStyles>
      <UserNameStyles active={userId === id}>{displayName}</UserNameStyles>
      <TimeStampStyles active={userId === id}>
        {timeFromNow(timestamp)}
      </TimeStampStyles>
      <MessageStyles>{content}</MessageStyles>
    </MessagesContainer>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps, null)(Messages);
