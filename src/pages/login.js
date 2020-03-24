import React from "react";
import styled from "styled-components";

import LoginStyled from "../components/auth/login.component";
import { Link } from "react-router-dom";
import { BLACK, PRIME_GREEN, ASH } from "../utils/constans";

const LoginPageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const Message = styled.div`
  background-color: ${BLACK};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  height: 6rem;
  width: 20rem;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.7px;
`;

const LinkStyles = styled(Link)`
  color: ${PRIME_GREEN};
  text-decoration: none;
  &:hover {
    color: ${ASH};
  }
`;

const Login = () => {
  return (
    <LoginPageStyled>
      <LoginStyled />
      <Message>
        <span>
          Don't have an account?<LinkStyles to="/register">Register</LinkStyles>
        </span>
      </Message>
    </LoginPageStyled>
  );
};

export default Login;
