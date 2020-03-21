import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { setCurrentChannel } from "../../redux/channel/channel.actions";

import { OFF_WHITE, DARK_GREY, LIGHTER_GREY } from "../../utils/constans";

const DiplayChannelContainer = styled.div`
  opacity: 0.7;
  margin-top: 3px;
  cursor: pointer;
  border-bottom: 2px solid ${LIGHTER_GREY};
  :hover {
    background-color: ${DARK_GREY};
    color: ${OFF_WHITE};
  }
`;

const ChannelItem = styled.div`
`;

const DisplayChannel = ({ channelName, channelData, setCurrentChannel }) => {

  const changeChannel = channelData => {
    setCurrentChannel(channelData);
  };

  return (
    <DiplayChannelContainer>
      <ChannelItem
        onClick={() => changeChannel(channelData)}
      >
        # {channelName}
      </ChannelItem>
    </DiplayChannelContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  setCurrentChannel: currentChannel =>
    dispatch(setCurrentChannel(currentChannel))
});

export default connect(null, mapDispatchToProps)(DisplayChannel);
