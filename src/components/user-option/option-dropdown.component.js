import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import { Link } from "react-router-dom";

import { DARK_BLACK, ASH, GREY, BLACK } from "../../utils/constans";

const OptionDropdownContainer = styled.div`
  position: absolute;
  width: 200px;
  height: 150px;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 2px;
  background-color: ${DARK_BLACK};
  top: 55px;
  right: 25px;
  z-index: 5;
  border-radius: 4px;
  @media screen and (max-width: 800px) {
    padding: 0;
    width: 150px;
    height: 200px;
    display: flex;
    flex-direction: column;
    right: 0px;
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
    background-color: ${BLACK};
  }
`;

const SignOut = styled.p`
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  color: ${ASH};
  text-decoration: none;
`;

const OptionDropdown = ({ currentUser }) => {
  return (
    <OptionDropdownContainer>
      <DropdownList>
        <ListItem>Change User Icon</ListItem>
        <ListItem>
          {currentUser ? (
            <SignOut
              onClick={() => {
                auth.signOut();
                console.log(currentUser);
              }}
            >
              Sign Out
            </SignOut>
          ) : (
            <OptionLink to="/login">Sign In</OptionLink>
          )}
        </ListItem>
      </DropdownList>
    </OptionDropdownContainer>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps, null)(OptionDropdown);
