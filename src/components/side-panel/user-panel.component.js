import React from "react";
import styled from "styled-components";

const UserPanelContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 1rem;
`;

const UserPanelTitle = styled.h2`
`;


const UserPanel = () => {
  return (
    <UserPanelContainer>
      <UserPanelTitle >Maru Chat</UserPanelTitle>
    </UserPanelContainer>
  );
};

export default UserPanel;
