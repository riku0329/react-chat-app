import React from "react";
import styled from "styled-components";
import { DARK_BLACK } from "../../utils/constans";

const MetaPanelContainer = styled.div`
  background-color: ${DARK_BLACK};
`;

const MetaPanel = () => {
  return <MetaPanelContainer>Meta</MetaPanelContainer>;
};

export default MetaPanel;
