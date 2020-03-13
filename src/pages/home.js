import React from "react";
import styled from "styled-components";

import Header from "../components/header/header.component";
import ColorPanel from "../components/color-panel/color-panel.component";
import SidePanel from "../components/side-panel/side-panel.component";
import Message from "../components/message/message.component";
import MetaPanel from "../components/meta-panel/meta-panel.component";
import { ASH } from "../utils/constans";

const HomeContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 70px 220px 400px 1fr;
  grid-template-rows: 50px 1fr ;
  color: ${ASH};
`;

const Home = () => {
  return (
    <HomeContainer>
      <ColorPanel />
      <SidePanel />
      <Header />
      <Message />
      <MetaPanel />
    </HomeContainer>
  );
};

export default Home;
