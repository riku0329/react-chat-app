import React, { useState } from "react";
import styled from "styled-components";
import { signInWithGoogle, auth } from "../firebase/firebase.utils";


import { OX, LIGHT_ASH } from "../utils/constans";

export const RegisterContainer = styled.div`
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

const RegisterTitle = styled.h2`
  color: ${OX};
  margin-top: 2rem;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3rem;
`;

const FormInput = styled.input`
  outline: none;
  border: 2px solid #c3ccdb;
  border-radius: 4px;
  display: block;
  width: 17rem;
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
  border-radius: 4px;
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
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    auth.signInWithEmailAndPassword(email, password)
      .then(createUser => {
      console.log(createUser)
      })
      .catch(err => {
        console.log(err)
      }

    )
  };

  const { username, email, password, confirmPassword } = userCredentials;
  const handleChange = event => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
    console.log(username);
  };

  return (
    <RegisterContainer>
      <RegisterTitle>Register for MaruChat</RegisterTitle>
      <form onSubmit={handleSubmit}>
        <FormContainer>
          <FormInput
            type="text"
            name="username"
            value={username}
            placeholder="User Name"
            label="User Name"
            onChange={handleChange}
          />
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
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm Password"
            label="Confirm Password"
            onChange={handleChange}
          />
          <SubmitButton>Register</SubmitButton>
          <SubmitButton onClick={signInWithGoogle}>
            Sign In With Google
          </SubmitButton>
        </FormContainer>
      </form>
    </RegisterContainer>
  );
};

export default RegisterStyled;
