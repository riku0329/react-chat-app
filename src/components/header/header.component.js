import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { LIGHT_DARK } from "../../utils/constans";

import OptionIcon from "../user-option/option-icon.component";
import OptionDropdown from "../user-option/option-dropdown.component";

const HeaderContainer = styled.div`
  grid-column: 3 / 5;
  background-color: ${LIGHT_DARK};
`;

const UserOption = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding-right: 1rem;
`;

const Header = ({ hidden }) => {
  return (
    <HeaderContainer>
      <UserOption>
        <OptionIcon />
        <h1>user</h1>
        {hidden ? null :
          <OptionDropdown />
        }
      </UserOption>
    </HeaderContainer>
  );
};


const mapStateToProps = state => ({
  hidden: state.user.hidden
})

export default connect(mapStateToProps, null)(Header);
