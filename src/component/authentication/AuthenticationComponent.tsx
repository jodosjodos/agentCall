import styled from "styled-components";
import { RootState } from "../../store";
import { useSelector } from "react-redux";

export const AuthenticationContainer = styled.div<{ $theme?: string | null }>`
  padding-top: 168px;
  gap: 21px;
  height: 100vh;
  width: 422px;
  width: 100%;
  background-color: white;
  background: ${(props) =>
    props.$theme == "light"
      ? 'url("/auth-background-large.svg")'
      : 'url("/auth-background-large-dark.svg")'};
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CheckCont = styled.div<{ $theme: string | null }>`
  background-color: ${(props) =>
    props.$theme == "light" ? "#0F2E35" : "##051316"};
`;
const InputContainer = styled.div<{ theme?: string | null }>`
  border: 1px solid #0f2e35;
  border-radius: 4px;
  display: flex;
  width: 422px;
  padding: 12px;
  background-color: transparent;
  display: flex;
  height: 44px;
  gap: 20px;
`;

const Input = styled.input<{ theme?: string }>`
  background-color: transparent;
  border: none;
  outline: none;

  flex-grow: 1;
  padding: 2px;
`;
const Title = styled.div<{ theme?: string }>`
  display: flex;
  flex-direction: column;
`;
const PageTitle = styled.div<{ $theme?: string | null }>`
  color: ${(props) => (props.$theme == "light" ? "#0F2E35" : "#FFFFFF")};
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
  text-align: center;
`;
const PageDescription = styled.div<{ $theme?: string | null }>`
  color: ${(props) => (props.$theme == "light" ? "#0F2E35" : "#FFFFFF")};
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  max-width: 500px;
`;
const GoogleButton = styled.button`
  border-radius: 8px;
  width: 422px;
  border: none;
  height: 44px;
  background: #051316;
  padding: 10px;
  color: #ffffff;
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
  text-align: center;
`;
const Continue = styled.button<{ $theme?: string | null }>`
  width: 422px;
  border: none;
  color: ${(props) => (props.$theme == "light" ? "white" : "#0F2E35")};
  background-color: ${(props) =>
    props.$theme == "light" ? "#09BED7" : "white"};
  height: 44px;
  padding: 12px 8px;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;

  border-radius: 6px;
`;

const FooterContainer = styled.div<{ $theme?: string | null }>`
  color: ${(props) => (props.$theme == "light" ? "#0A2328" : "#ffffff")};

  display: flex;
  width: 442px;
  align-items: center;
  gap: 5px;
  justify-content: center;
`;
const Link = styled.a`
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;

  text-align: right;
  color: #09bed7;
`;
export function AuthInput({
  icon,
  placeholder,
  inputType,
}: {
  icon: string;
  placeholder: string;
  inputType?: string;
}) {
  return (
    <InputContainer>
      <img src={icon} alt="icon" />
      <Input
        placeholder={placeholder}
        type={inputType ? inputType : "text"}
      ></Input>
    </InputContainer>
  );
}

export function AuthTitle({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <Title>
      <PageTitle $theme={theme}>{title}</PageTitle>
      {description && (
        <PageDescription $theme={theme}>{description}</PageDescription>
      )}
    </Title>
  );
}
export function AuthFooter({
  title,
  linkName,
  to,
  theme,
}: {
  title: string;
  linkName: string;
  to: string;
  theme?: string | null;
}) {
  return (
    <FooterContainer $theme={theme}>
      <p className="mb-0">{title}</p>
      <Link href={to}>{linkName}</Link>
    </FooterContainer>
  );
}

export function ContinueButton() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return <Continue $theme={theme}>Continue</Continue>;
}

export function GoogleSignInButton() {
  return (
    <GoogleButton>
      <img src="google.svg" alt="Google sign in button" />
      Or sign in with Google
    </GoogleButton>
  );
}

export function CheckContainer() {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return <CheckCont $theme={theme}></CheckCont>;
}
