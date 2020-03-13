import React from "react";
import styled from "styled-components";
import { DARK_BLACK } from "../../utils/constans";

const ColorPanleContainer = styled.div`
  background-color: ${DARK_BLACK};
  grid-row: 1/ -1;
`;

const ColorPanel = () => {
  return <ColorPanleContainer>Color</ColorPanleContainer>;
};

export default ColorPanel;
