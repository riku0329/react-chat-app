import React from "react";
import styled from "styled-components";
import { LIGHT_PURPLE, PURPLE, DARK_GREEN, GREEN } from "../../utils/constans";


const MetaPanelContainer = styled.div`
  background-color: ${GREEN};
`;

const MetaPanel = () => {
  return <MetaPanelContainer>Meta</MetaPanelContainer>;
};

export default MetaPanel;
