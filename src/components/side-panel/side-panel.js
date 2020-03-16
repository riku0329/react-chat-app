import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { LIGHT_BLACK } from "../../utils/constans";

import {
  firestore,
  convertChannelsSnapShotToMap
} from "../../firebase/firebase.utils";
import { getChannels } from "../../redux/channel/channel.actions";

import Channels from "./channels.component";
import SideHeader from "./side-header.component";

const MenuContainer = styled.div`
  background-color: ${LIGHT_BLACK};
  grid-row: span 2;
  display: grid;
  grid-template-rows: 100px 1fr 100px;
`;

const SidePanel = ({ getChannels }) => {
  useEffect(() => {
    const channelRef = firestore.collection("channel");
    const unsubscribeFromSnapShot = channelRef.onSnapshot(async snapShot => {
      const channelsMap = convertChannelsSnapShotToMap(snapShot);
      getChannels(channelsMap);
    });
    return () => {
      unsubscribeFromSnapShot();
    };
  }, []);
  return (
    <MenuContainer>
      <SideHeader />
      <Channels />
    </MenuContainer>
  );
};


const mapDispatchToProps = dispatch => ({
  getChannels: channelsMap => dispatch(getChannels(channelsMap))
});

export default connect(null, mapDispatchToProps)(SidePanel);
