import React from "react";
import styled from "styled-components";
import { DARK_BLACK } from "../../utils/constans";
import Usage from "../usage/star.component";

const MetaPanelContainer = styled.div`
  background-color: ${DARK_BLACK};
`;

const MetaPanel = () => {
  return <MetaPanelContainer>
    <Usage />
  </MetaPanelContainer>;
};

export default MetaPanel;
