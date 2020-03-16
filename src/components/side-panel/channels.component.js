import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import DisplayChannel from "./display-channel.component";
import AddChannelModal from "../modal/add-channels.modal.component";
import { ASH } from "../../utils/constans";

const ChannelsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

const ChalleIconStyle = styled.span`
  fill: ${ASH};
  text-align: center;
  padding-left: 0rem;
`;

export const ChalleIcon = () => {
  return (
    <ChalleIconStyle>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="20px"
        height="10px"
        viewBox="0 0 32 32"
      >
        <title>plus</title>
        <path d="M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z"></path>
      </svg>
    </ChalleIconStyle>
  );
};

const Channels = ({ channels }) => {
  return (
    <ChannelsContainer>
      <AddChannelModal />
      {
        channels.map(channel => (
          <DisplayChannel key={channel.id} channelName={channel.channelName} channelData={channel} />
        ))
      }
    </ChannelsContainer>
  );
};

const mapStateToProps = state => ({
  channels: state.channel.channels
});

export default connect(mapStateToProps, null)(Channels);
