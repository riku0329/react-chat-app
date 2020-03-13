import React from "react";
import styled from "styled-components";

const AboutUserContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const UserImage = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-right: 6px;
`;

const AboutUser = ({ currentUser }) => {

  const {displayName, photoURL} = currentUser
  return (
    <AboutUserContainer>
      <UserImage src={photoURL}/>
    <p>{displayName}</p>
  </AboutUserContainer>)
}

export default AboutUser;
