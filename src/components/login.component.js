import React, { useState } from "react";
import styled from "styled-components";
import { signInWithGoogle, auth } from "../firebase/firebase.utils";

import { FormContainer, FormInput } from "./form-input.component";
import CustomButton from "./custom-button.component";
import { LIGHT_PURPLE } from "../utils/constans";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  height: 30rem;
  width: 20rem;
  margin: 2rem;

  @media screen and (max-width: 1000px) {
    max-width: 100%;
  }
  @media screen and (max-width: 800px) {
    max-width: 100%;
  }
`;

const LoginTitle = styled.h2`
  color: ${LIGHT_PURPLE};
  margin-top: 2rem;
`;

const LoginStyled = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: ""
  });
  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);

      setUserCredentials({ email: "", password: "" });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <LoginContainer>
      <LoginTitle>Login for MaruChat</LoginTitle>
      <form onSubmit={handleSubmit}>
        <FormContainer>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            label="Email"
            onChange={handleChange}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            label="Password"
            onChange={handleChange}
          />
          <CustomButton isLogin >Login</CustomButton>
        </FormContainer>
      </form>
      <CustomButton isGoogleLogin onClick={signInWithGoogle}>Login With Google</CustomButton>
    </LoginContainer>
  );
};

export default LoginStyled;
