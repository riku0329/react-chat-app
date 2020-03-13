import React from "react";
import styled from "styled-components";
import { LIGHT_PURPLE, PURPLE, DARK_GREEN, GREEN, LIGHT_BLACK, BLACK, DARK } from "../../utils/constans";

import UserPanel from "./user-panel.component";

const MenuContainer = styled.div`
  background-color: ${DARK};
  grid-row: span 2;
`;

const SidePanel = () => {
  return (
    <MenuContainer>
      <UserPanel />
    </MenuContainer>
  );
};

export default SidePanel;
