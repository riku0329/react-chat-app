import React from "react";
import styled from "styled-components";

import Header from "../components/header/header.component";
import SidePanel from "../components/side-panel/side-panel";
import Message from "../components/message/message";
import { ASH, BLACK } from "../utils/constans";

const HomeContainer = styled.div`
  min-height: 90vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr minmax(100px, 4fr);
  grid-template-rows: 50px 3fr 50px;
  justify-content: center;
  color: ${ASH};
  background-color: ${BLACK};
  border-radius: 10px;
  @media screen and (max-width: 1000px) {
    min-height: 100vh;
  }
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
