import React from "react";
import styled from "styled-components";

const SideHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 1rem;
`;

const SideTitle = styled.h2`
`;


const UserPanel = () => {
  return (
    <SideHeaderContainer>
      <SideTitle >Maru Chat</SideTitle>
    </SideHeaderContainer>
  );
};

export default UserPanel;
