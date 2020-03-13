import React from "react";
import styled from "styled-components";
import { LIGHT_BLACK } from "../../utils/constans";

import ChannelsPanle from "./channels-panel.component";
import UserPanel from "./user-panel.component";

const MenuContainer = styled.div`
  background-color: ${LIGHT_BLACK};
  grid-row: span 2;
  display: grid;
  grid-template-rows: 100px 1fr 100px;
`;

const SidePanel = () => {
  return (
    <MenuContainer>
      <UserPanel />
      <ChannelsPanle />
    </MenuContainer>
  );
};

export default SidePanel;
