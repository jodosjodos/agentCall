import styled from "styled-components";
import { RootState } from "../../store";
import { useSelector } from "react-redux";

export const AuthenticationContainer = styled.div<{ $theme?: string | null }>`
  overflow: auto;
  padding-top: 100px;
  gap: 21px;
  height: 100vh;
  width: 422px;
  @media (max-width: 440px) {
    width: 100%;

    padding: 40px 30px;
  }
  width: 100%;

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
const InputContainer = styled.div<{ $theme?: string | null }>`
  border-radius: 9px !important;
  border: 1px solid #0f2e35;
  color:${(props) => (props.$theme == "light" ? "#0F2E35" : "white")}
  
  display: flex;
  width: 422px;
  @media (max-width: 440px) {
    width: 100%;
    
    
  }
  padding: 12px;
  background-color: transparent;
  display: flex;
  height: 44px;
  gap: 10px;
`;

const Input = styled.input<{ $theme?: string }>`
  background-color: transparent;
  border: none;
  color: ${(props) => (props.$theme == "light" ? "#0A2328" : "#ffffff")};
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
  @media (max-width: 440px) {
    width: 100%;
  }
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
  @media (max-width: 440px) {
    width: 100%;
  }
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
  display: flex;
  width: 442px;
  align-items: center;
  gap: 5px;
  justify-content: center;
`;
const Paragraph = styled.p`
  color: inherit !important;
`;
const Link = styled.a`
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;

  text-align: right;
  color: #09bed7;
`;

const CheckBox = styled.input`
  width: 20px;
  height: 20px;
  &:hover {
    cursor: pointer;
  }
`;
const CheckBoxContainer = styled.div<{ $theme?: string }>`
  width: 422px;
  @media (max-width: 440px) {
    width: 100%;
  }
  display: flex;
  align-items: start;
  padding: 5px 8px;
  border-radius: 8px;
  color: #96adb3;
  font-size: 14px;
  font-weight: 400;
  gap: 6px;
  height: fit-content;
  line-height: 18px;
  background-color: ${(props) =>
    props.$theme == "light" ? "#C9D5D8" : "#051316"};
`;
const Flex = styled.div<{ $theme?: string }>`
  @media (max-width: 440px) {
    width: 100%;
  }
  width: 422px;
  display: flex;
  color: ${(props) => (props.$theme == "light" ? "#384B4F" : "white")};
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
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <InputContainer>
      <img src={icon} alt="icon" />
      <Input
        $theme={theme}
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
      <Paragraph className="mb-0">{title}</Paragraph>
      <Link href={to}>{linkName}</Link>
    </FooterContainer>
  );
}

export function ContinueButton({
  onclick,
  text,
}: {
  onclick?: any;
  text?: string;
}) {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <Continue onClick={onclick ? onclick : () => {}} $theme={theme}>
      {text ? text : "Continue"}
    </Continue>
  );
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
export function SignUpCheck() {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <CheckBoxContainer $theme={theme}>
      <CheckBox type="checkbox" name="" id="" />
      <p>
        By checking this box i confirm that all the contacts i am importing have
        given me express written consent to contact them with artificial and
        pre-recorded voice calls. I also agree to comply with all relevant TCPA,
        TSR and regulatory laws/guidelines concerning my communication with
        these contacts.
      </p>
    </CheckBoxContainer>
  );
}
export function LoginCheck() {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <Flex $theme={theme} className="justify-content-between">
      <div className="d-flex gap-2">
        <CheckBox type="checkbox" name="" className="" id="remember" />
        <label htmlFor="remember">Remember me</label>
      </div>
      <LoginLink href="/reset_password">Forgot password ?</LoginLink>
    </Flex>
  );
}

const LoginLink = styled.a`
  color: inherit;
  text-decoration: none;
`;
