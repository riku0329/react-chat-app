import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { LIGHT_DARK, LIGHT_BLACK, BLACK, DARK_BLACK, ASH } from "../../utils/constans";

import AboutUser from "../user-option/about-user.component";
import OptionIcon from "../user-option/option-icon.component";
import OptionDropdown from "../user-option/option-dropdown.component";

const HeaderContainer = styled.div`
  grid-column: 3 / 5;
  background-color: ${LIGHT_BLACK};
  box-shadow: 1px 3px rgba(0, 0, 0, 0.4);
`;

const UserOption = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 11px;
`;

const ChannelName = styled.div`
  flex: 1;
  font-size: 1.5rem;
`;

const SearchForm = styled.input`
  margin-right: 5rem;
  color: ${ASH};
  outline: none;
  border: 1px solid ${ASH};
  border-radius: 4px;
  display: block;
  font-size: 14px;
  background-color: ${LIGHT_BLACK};

  &:hover,
  &:active {

  }

  @media screen and (max-width: 800px) {
    width: 17rem;
  }
`;

const Header = ({ hidden, currentUser }) => {
  return (
    <HeaderContainer>
      <UserOption>
        <OptionIcon />
        {currentUser ? <AboutUser currentUser={currentUser} /> : <p>gest user</p>}
        <p></p>
        {hidden ? null : <OptionDropdown />}
        <SearchForm type="search" placeholder="search message" />
        <ChannelName>Channel</ChannelName>
      </UserOption>
    </HeaderContainer>
  );
};

const mapStateToProps = state => ({
  hidden: state.user.hidden,
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps, null)(Header);
