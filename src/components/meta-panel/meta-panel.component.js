import React from "react";
import styled from "styled-components";
import { LIGHT_DARK } from "../../utils/constans";


const MetaPanelContainer = styled.div`
  background-color: ${LIGHT_DARK};
`;

const MetaPanel = () => {
  return <MetaPanelContainer>Meta</MetaPanelContainer>;
};

export default MetaPanel;
