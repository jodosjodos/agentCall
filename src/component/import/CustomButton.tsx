import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store";
const CustButton = styled.button<{theme?:string}>`

  border-radius: 20px;
  padding: 5px;
  background-color: ${(props) => (props.theme == "light" ? "#224D57" : "rgba(0, 183, 223, 1)")};
  color: ${(props) => (props.theme == "light" ? "white" : "black")};
  border: none;
  
`;
function CustomButton({ child,onclick }: { child: ReactNode,onclick?:()=>any }) {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return <CustButton  theme={theme} onClick={onclick&&onclick}>{child}</CustButton>;
}

export default CustomButton;
