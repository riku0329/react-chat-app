import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { BLACK } from "../../utils/constans";

import {
  firestore,
  convertChannelsSnapShotToMap
} from "../../firebase/firebase.utils";
import { getChannels } from "../../redux/channel/channel.actions";

import Channels from "./channels.component";
import SideHeader from "./side-header.component";
import DirectMessage from "./directmessage.component";

const MenuContainer = styled.div`
  background-color: ${BLACK};
  opacity: 1;
  grid-row: span 2;
  display: grid;
  grid-template-rows: 100px 1fr 1fr 100px;
  margin: 1rem;
`;

const SidePanel = ({ getChannels }) => {
  useEffect(() => {
    const channelRef = firestore.collection("channel");
    const unsubscribeFromSnapShot = channelRef
      .orderBy("createdAt", "asc")
      .limit(20)
      .onSnapshot(async snapShot => {
        const channelsMap = convertChannelsSnapShotToMap(snapShot);
        getChannels(channelsMap);
      });
    return () => {
      unsubscribeFromSnapShot();
    };
  }, [getChannels]);
  return (
    <MenuContainer>
      <SideHeader />
      <Channels />
      <DirectMessage />
    </MenuContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  getChannels: channelsMap => dispatch(getChannels(channelsMap))
});

const mapStateToProps = state => ({
  channels: state.channel.channels
});

export default connect(mapStateToProps, mapDispatchToProps)(SidePanel);
