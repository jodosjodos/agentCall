import React from "react";
import {
  AuthFooter,
  AuthInput,
  AuthTitle,
  AuthenticationContainer,
  ContinueButton,
} from "../component/authentication/AuthenticationComponent";
import { useSelector } from "react-redux";
import { RootState } from "../store";

function LoginPage() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <AuthenticationContainer $theme={theme}>
      <AuthTitle title="LOGIN"></AuthTitle>
      <AuthInput placeholder="USERNAME" icon="/person.svg"></AuthInput>
      <AuthInput placeholder="PASSWORD" icon="/lock.svg"></AuthInput>
      <ContinueButton></ContinueButton>
      <AuthFooter
        theme={theme}
        title="Dont have an account?"
        linkName="SIGN UP NOW"
        to="/signup"
      ></AuthFooter>
    </AuthenticationContainer>
  );
}

export default LoginPage;
