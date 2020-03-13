import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { LIGHT_DARK, LIGHT_BLACK } from "../../utils/constans";

import AboutUser from "../user-option/about-user.component";
import OptionIcon from "../user-option/option-icon.component";
import OptionDropdown from "../user-option/option-dropdown.component";

const HeaderContainer = styled.div`
  grid-column: 3 / 5;
  background-color: ${LIGHT_DARK};
  box-shadow: 1px 3px rgba(0, 0, 0, 0.4);
`;

const UserOption = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 11px;
`;

const Header = ({ hidden, currentUser }) => {
  return (
    <HeaderContainer>
      <UserOption>
        <OptionIcon />
        {currentUser ? <AboutUser currentUser={currentUser} /> : <p>gest user</p>}
        <p></p>
        {hidden ? null : <OptionDropdown />}
      </UserOption>
    </HeaderContainer>
  );
};

const mapStateToProps = state => ({
  hidden: state.user.hidden,
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps, null)(Header);
