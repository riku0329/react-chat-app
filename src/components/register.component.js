import React from "react";
import styled from "styled-components";

import { OX, LIGHT_ASH } from "../utils/constans";

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  height: 30rem;
  width: 25rem;
  margin: 2rem;

  @media screen and (max-width: 1000px) {
    max-width: 100%;
  }
  @media screen and (max-width: 800px) {
    max-width: 100%;
  }
`;

const RegisterTitle = styled.h2`
  color: ${OX};
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 4rem;
`;

const FormInput = styled.input`
  outline: none;
  border: 2px solid #c3ccdb;
  border-radius: 4px;
  display: block;
  width: 20rem;
  padding: 10px;
  font-size: 14px;
  margin-bottom: 10px;
  background-color: ${LIGHT_ASH};
  @media screen and (max-width: 800px) {
    width: 17rem;
  }
`;

const SubmitButton = styled.button`
  margin-bottom: 1rem;
  width: auto;
  height: 2rem;
  border-radius: 2px;
  letter-spacing: 0.5px;
  font-size: 14px;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  min-width: 165px;
  cursor: pointer;
  display: flex;
  justify-content: center;

  background-color: #4285f4;
  color: white;
  border: none;
  &:hover {
    border: 1px solid black;
    background-color: #357ae8;
    border: none;
  }
`;

const RegisterStyled = () => {
  const handleChange = () => {};
  return (
    <RegisterContainer>
      <RegisterTitle>Register for MaruChat</RegisterTitle>
      <form>
        <FormContainer>
          <FormInput
            type="text"
            name="username"
            placeholder="User Name"
            label="User Name"
            onChange={handleChange}
          />
          <FormInput
            type="email"
            name="email"
            placeholder="Email"
            label="Email"
            onChange={handleChange}
          />
          <FormInput
            type="password"
            name="password"
            placeholder="Password"
            label="Password"
            onChange={handleChange}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            label="Confirm Password"
            onChange={handleChange}
          />
          <SubmitButton>Register</SubmitButton>
          <SubmitButton>Sign Up With Google</SubmitButton>
        </FormContainer>
      </form>
    </RegisterContainer>
  );
};

export default RegisterStyled;
