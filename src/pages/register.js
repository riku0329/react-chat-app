import React from "react";
import styled from "styled-components";

import RegisterStyled from "../components/auth/register.component";
import { Link } from "react-router-dom";
import { BLACK } from "../utils/constans";

const RegisterPageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

const Register = () => {
  return (
    <RegisterPageStyled>
      <RegisterStyled />
      <Message>
        <span>
          Already a user?<Link to="/login">Login</Link>
        </span>
      </Message>
      <Link to="/">aaa</Link>
    </RegisterPageStyled>
  );
};

export default Register;
