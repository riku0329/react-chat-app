import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import moment from "moment";
import {
  DARK_GREY,
  PRIME_GREEN,
  OFF_WHITE,
} from "../../utils/constans";

const MessagesContainer = styled.div`
  display: grid;
  grid-template-columns: 3rem 3fr 1fr 3rem;
  grid-template-rows: 1rem 1fr 1rem;
  width: 40%;
  height: 6rem;
  @media screen and (max-width: 1000px) {
    width: 70%;
  }
  ${({ active }) =>
    active &&
    `
      margin: 1rem 0 1rem auto;
  `}
`;

const PhotoStyles = styled.div`
  grid-column: 1/ 2;
  grid-row: 1;
  margin: 5px;
  ${({ active }) =>
    active &&
    `
      grid-column: 4/ 5;
      grid-row: 1;
      background-color: ${PRIME_GREEN};
      margin: 1rem 0 1rem auto;
  `}
`;

const UserIcon = styled.img`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-right: 6px;
`;
const TimeStampStyles = styled.div`
  grid-column: 2;
  grid-row: 4;
  font-size: 0.8rem;


  ${({ active }) =>
    active &&
    `
    grid-column: 3 / 4;
    grid-row: 4;
  `}
`;
const MessageStyles = styled.p`
  font-size: .8rem;
  padding: 5px 9px;
`;
const TextContainer = styled.div`
  background-color: ${DARK_GREY};
  grid-column: 2 / 5;
  grid-row: 2 / 4;
  border-radius: 5px;
  display: inline-block;
  min-width: 5rem;
  ${({ active }) =>
    active &&
    `
      grid-column: 1 / 4;
      grid-row: 2 / 4;
      background-color: #4285f4;
      color: ${OFF_WHITE};
  `}
`;

const Messages = ({ message, currentUser }) => {
  const { photoURL, content, timestamp, userId } = message;
  const { id } = currentUser;

  const timeFromNow = timestamp => moment(timestamp).format("HH:mm");

  return (
    <MessagesContainer active={userId === id}>
      <PhotoStyles active={userId === id}>
        <UserIcon src={photoURL} />
      </PhotoStyles>
      <TimeStampStyles active={userId === id}>
        {timeFromNow(timestamp)}
      </TimeStampStyles>
      <TextContainer active={userId === id}>
        <MessageStyles>{content}</MessageStyles>
      </TextContainer>
    </MessagesContainer>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps, null)(Messages);
