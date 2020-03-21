import React from "react";
import styled from "styled-components";

import Header from "../components/header/header.component";
import SidePanel from "../components/side-panel/side-panel";
import Message from "../components/message/message";
import { ASH, BLACK } from "../utils/constans";

const HomeContainer = styled.div`
  height: 88vh;
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 50px 1fr;
  color: ${ASH};
  background-color: ${BLACK};
  border-radius: 5px;
`;

const Home = () => {
  return (
    <HomeContainer>
      <SidePanel />
      <Header />
      <Message />
    </HomeContainer>
  );
};

export default Home;
