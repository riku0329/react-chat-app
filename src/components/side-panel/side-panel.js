import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  firestore,
  convertChannelsSnapShotToMap
} from "../../firebase/firebase.utils";
import { selectAllChannels } from "../../redux/channel/channel.selectors";
import { getChannels } from "../../redux/channel/channel.actions";
import { BLACK, LIGHT_BLACK } from "../../utils/constans";

import Channels from "./channels.component";

const MenuContainer = styled.div`
  padding: 1rem;
  background-color: ${BLACK};
  opacity: 1;
  grid-row: span 2;
  grid-column: 1;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  @media screen and (max-width: 800px) {
    background-color: ${LIGHT_BLACK};
    grid-row: 4;
    grid-column: 1 / 4;
    flex-direction: row;
    margin: 0;
    padding: 0;
  }
`;

const SidePanel = ({ getChannels, channels }) => {
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
      <Channels channels={channels} />
    </MenuContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  getChannels: channelsMap => dispatch(getChannels(channelsMap))
});

const mapStateToProps = createStructuredSelector({
  channels: selectAllChannels
});

export default connect(mapStateToProps, mapDispatchToProps)(SidePanel);
