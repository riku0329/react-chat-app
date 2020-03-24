import React from "react";
import styled from "styled-components";

import RegisterStyled from "../components/auth/register.component";
import { Link } from "react-router-dom";
import { BLACK, LIGHT_ASH, ASH, OFF_WHITE, PRIME_GREEN } from "../utils/constans";

const RegisterPageStyled = styled.div`
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

const Register = () => {
  return (
    <RegisterPageStyled>
      <RegisterStyled />
      <Message>
        <span>
          Already a user?
          <LinkStyles to="/login">
            <p>Login</p>
          </LinkStyles>
        </span>
      </Message>
    </RegisterPageStyled>
  );
};

export default Register;
