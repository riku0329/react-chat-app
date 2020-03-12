import React from "react";
import styled, { css } from "styled-components";

import { LIGHT_PURPLE, PURPLE, DARK_GREEN, GREEN } from "../utils/constans";

const loginButton = css`
  background-color: ${LIGHT_PURPLE};
  &:hover {
    background-color: ${PURPLE};
  }
`;

const registerButton = css`
  background-color: ${GREEN};
  &:hover {
    background-color: ${DARK_GREEN};
  }
`;

const googleLoginButton = css`
  background-color: #4285f4;
  &:hover {
    background-color: #357ae8;
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleLogin) {
    return googleLoginButton
  } else if (props.isLogin) {
    return loginButton
  } else if (props.isRegister) {
    return registerButton
  }
}


const CustomButtonContainer = styled.button`
  margin-bottom: 1rem;
  width: 17rem;
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
  outline: none;
  color: white;
  border: none;
  ${getButtonStyles}
`;



const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
