import React from "react";
import {
  AuthenticationContainer,
  AuthTitle,
  AuthInput,
  ContinueButton,
  AuthFooter,
  GoogleSignInButton,
} from "../component/authentication/AuthenticationComponent";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const navigate = useNavigate();
  return (
    <AuthenticationContainer $theme={theme}>
      <AuthTitle
        title="FORGOT PASSWORD"
        description="Enter the email associated with your account and we will send you a link to reset your password"
      ></AuthTitle>

      <AuthInput
        placeholder="INPUT YOUR EMAIL"
        icon="/mail.svg"
        inputType="email"
      ></AuthInput>
      <ContinueButton
        onclick={() => {
          navigate("/new_password");
        }}
      ></ContinueButton>
      <GoogleSignInButton></GoogleSignInButton>
      <AuthFooter
        title="Don't have an account?"
        linkName="SIGN UP NOW"
        to="/signup"
      ></AuthFooter>
    </AuthenticationContainer>
  );
}

export default ForgotPassword;
