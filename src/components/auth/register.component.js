import React, { useState } from "react";
import styled from "styled-components";
import md5 from "md5";
import {
  signInWithGoogle,
  auth,
  createUserProfile
} from "../../firebase/firebase.utils";

import { FormContainer, FormInput } from "../form-input/form-input.component";
import { checkLength, checkEmail } from "../../utils/check-valid";
import CustomButton from "../custom-button/custom-button.component";
import { DARK_GREEN } from "../../utils/constans";

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
  color: ${DARK_GREEN};
  margin-top: 2rem;
`;

const RegisterStyled = () => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const { displayName, email, password, confirmPassword } = userCredentials;

  const photo = {
    photoURL: `http://gravatar.com/avatar/${md5(email)}?d=identicon`
  };

  const { photoURL } = photo;
  const handleSubmit = async event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords don't match");
      setUserCredentials({
        password: "",
        confirmPassword: ""
      });
      return;
    }
    checkLength(displayName, 3, 20);
    checkLength(password, 6, 20);
    checkEmail(email);

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfile(user, { displayName, photoURL });

      setUserCredentials({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <RegisterContainer>
      <RegisterTitle>Register for MaruChat</RegisterTitle>
      <form onSubmit={handleSubmit}>
        <FormContainer>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            placeholder="User Name"
            label="Display Name"
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
          <CustomButton isRegister onClick={handleSubmit}>
            Register
          </CustomButton>
        </FormContainer>
      </form>
      <CustomButton isGoogleLogin onClick={signInWithGoogle}>
        Sign In With Google
      </CustomButton>
    </RegisterContainer>
  );
};

export default RegisterStyled;

// userAuth.createUserWithEmailAndPassword(email, password).then(createdUser => {
//   console.log(createdUser);
//   createdUser.user.updateProfile({
//     displayName: displayName,
//     photoURL: `http://gravatar.com/avatar/${md5(email)}?d=identicon`
//   });
// });
