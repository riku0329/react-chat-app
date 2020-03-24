import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import { Link } from "react-router-dom";

import { DARK_BLACK, ASH, GREY, LIGHT_BLACK } from "../../utils/constans";

const OptionDropdownContainer = styled.div`
  position: absolute;
  width: 200px;
  height: 50px;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 2px;
  background-color: ${DARK_BLACK};
  top: 6rem;
  right: 10rem;
  z-index: 5;
  border-radius: 4px;
  @media screen and (max-width: 800px) {
    padding: 0;
    width: 150px;
    height: 50px;
    display: flex;
    flex-direction: column;
    right: 20px;
    top: 3rem;
  }
`;

const DropdownList = styled.ul`
  list-style: none;
  width: 100%;
  cursor: pointer;
`;

const ListItem = styled.li`
  padding-top: 5px;
  border-bottom: 2px solid ${GREY};

  &:hover {
    background-color: ${LIGHT_BLACK};
  }
`;

const SignOut = styled.p``;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  color: ${ASH};
  text-decoration: none;
  @media screen and (max-width: 1000px) {
    padding: 0;
  }
`;

const OptionDropdown = ({ currentUser }) => {
  return (
    <OptionDropdownContainer>
      <DropdownList>
        <ListItem>Change User Icon</ListItem>
        <ListItem>
          <SignOut
            onClick={() => {
              auth.signOut();
            }}
          >
            Sign Out
          </SignOut>
        </ListItem>
      </DropdownList>
    </OptionDropdownContainer>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps, null)(OptionDropdown);
