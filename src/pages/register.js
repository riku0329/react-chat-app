import React from "react";
import styled from "styled-components";

import RegisterStyled from "../components/register.component";

const RegisterPageStyled = styled.div`
  display: flex;
  justify-content: center;
`;

const Register = () => {
  return (
    <RegisterPageStyled>
      <RegisterStyled />
    </RegisterPageStyled>
  );
};

export default Register;
