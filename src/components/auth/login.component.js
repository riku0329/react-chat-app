import React, { useState } from "react";
import styled from "styled-components";
import {
  signInWithGoogle,
  auth,
  authSession
} from "../../firebase/firebase.utils";

import { FormContainer, FormInput } from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { LIGHT_PURPLE, BLACK } from "../../utils/constans";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${BLACK};
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
      await authSession.then(() => {
        return auth.signInWithEmailAndPassword(email, password);
      });
      setUserCredentials({ email: "", password: "" });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleTestUser = async event => {
    event.preventDefault();
    try {
      await authSession.then(() => {
        return auth.signInWithEmailAndPassword("test@test.com", "password");
      });
    } catch (error) {
      console.error(error);
    }
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
            autoComplete="off"
          />
          <CustomButton isCustom onClick={handleSubmit}>
            Login
          </CustomButton>
        </FormContainer>
      </form>
      <CustomButton isGoogleLogin onClick={signInWithGoogle}>
        Login With Google
      </CustomButton>
      <span>テストユーザーで自動ログインする。</span>
      <CustomButton isCustom onClick={handleTestUser}>
        クリックでログイン
      </CustomButton>
    </LoginContainer>
  );
};

export default LoginStyled;
