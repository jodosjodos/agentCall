import React from "react";
import {
  AuthenticationContainer,
  AuthTitle,
  AuthInput,
  GoogleSignInButton,
  ContinueButton,
  AuthFooter,
  SignUpCheck,
} from "../component/authentication/AuthenticationComponent";
import { useSelector } from "react-redux";
import { RootState } from "../store";

function SignUpPage() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <AuthenticationContainer $theme={theme}>
      <AuthTitle
        title="SIGN UP"
        description="Create your free account"
      ></AuthTitle>
      <AuthInput placeholder="FULL NAME" icon="/person.svg"></AuthInput>
      <AuthInput placeholder="PHONE NUMBER" icon="/phone.svg"></AuthInput>
      <AuthInput
        placeholder="INPUT YOUR EMAIL"
        icon="/mail.svg"
        inputType="email"
      ></AuthInput>
      <AuthInput
        placeholder="SET YOUR PASSWORD"
        icon="/lock.svg"
        inputType="password"
      ></AuthInput>
      <SignUpCheck></SignUpCheck>
      <ContinueButton text="SIGN UP"></ContinueButton>
      <GoogleSignInButton></GoogleSignInButton>
      <AuthFooter
        theme={theme}
        title="Have an account?"
        linkName="LOGIN NOW"
        to="/login"
      ></AuthFooter>
    </AuthenticationContainer>
  );
}

export default SignUpPage;
