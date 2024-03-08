import React, { ReactNode } from "react";
import styled from "styled-components";
const CustButton = styled.button`
  border-radius: 20px;
  padding: 5px;
  background-color: rgba(0, 183, 223, 1);
  border: none;
`;
function CustomButton({ child,onclick }: { child: ReactNode,onclick?:any }) {
  return <CustButton  onClick={onclick&&onclick}>{child}</CustButton>;
}

export default CustomButton;
