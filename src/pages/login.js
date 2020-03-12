import React from "react";
import styled from "styled-components";

import LoginStyled from "../components/login.component";
import { Link } from "react-router-dom";

const LoginPageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Message = styled.div`
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  height: 6rem;
  width: 20rem;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.7px;
`;

const Login = () => {
  return (
    <LoginPageStyled>
      <LoginStyled />
      <Message>
        <span>
          Don't have an account?<Link to="/register">Register</Link>
        </span>
      </Message>
      <Link to="/">aaa</Link>
    </LoginPageStyled>
  );
};

export default Login;
