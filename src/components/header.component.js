import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { auth } from "../firebase/firebase.utils";
import { Link } from "react-router-dom";


const HeaderContainer = styled.div``;

const Logout = styled.div`
  cursor: pointer;
`;

const Header = ({ currentUser }) => {
  return (
    <HeaderContainer>
      {currentUser ? (
        <Logout onClick={() => auth.signOut()}>Logout</Logout>
      ) : (
        <Link to="/register">Login</Link>
      )}
    </HeaderContainer>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps, null)(Header);
