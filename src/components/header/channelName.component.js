import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getJoinUsers } from "../../redux/message/message.actions";
import { PRIME_GREEN } from "../../utils/constans";

const ChannelNameContainer = styled.div`
  flex: 1;
  font-size: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const JoinUsersStyles = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-left: 2rem;
  color: ${PRIME_GREEN};
`;

const ChannelName = ({ currentChannel, messages, getJoinUsers, joinUsers }) => {
  const { channelName } = currentChannel;

  const countUniqueUsers = messages => {
    const uniqueUsers = messages.reduce((acc, message) => {
      if (!acc.includes(message.displayName)) {
        acc.push(message.displayName);
      }
      return acc;
    }, []);
    const numUniqueUsers = uniqueUsers.length;
    getJoinUsers(numUniqueUsers);
  };

  countUniqueUsers(messages);

  return (
    <ChannelNameContainer>
      <div># {channelName}</div>
      <JoinUsersStyles>{joinUsers}users</JoinUsersStyles>
    </ChannelNameContainer>
  );
};

const mapStateToProps = state => ({
  joinUsers: state.message.joinUsers
});

const mapDispatchToProps = dispatch => ({
  getJoinUsers: uniqueUsers => dispatch(getJoinUsers(uniqueUsers))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelName);
