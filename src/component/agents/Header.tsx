import React from "react";
import { Col } from "react-bootstrap";

import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store";
import Toggle from "../Toggle";

const H1Styled = styled.h4<{ theme: string }>`
  color: ${(props) => (props.theme === "light" ? "#051316" : "#96adb3")};
  font-weight: bold;
`;
const DivStyled = styled.div<{ theme: string }>`
  border-bottom: ${(props) =>
    props.theme === "light" ? "1px solid #9ABCC4" : "1px solid #0f2e35"};
  width: 100%;
  padding: 0px 0px 0px 50px;
  @media (max-width: 993px) {
    padding-top: 40px !important;
    padding: 0 30px;
  }
`;

const PModified = styled.p<{ theme: string }>`
  color: ${(props) => (props.theme == "light" ? "#0F2E35" : "#384b4f")};
  font-weight: bold;
`;

const ImgMod = styled.img`
  width: 23px;
  position: absolute;
  right: 20px;
  top: 17px;
`;
const InputMod = styled.input<{ $theme?: string }>`
  float: right;
  padding: 6px 6px;
  border: none;
  margin-top: 8px;

  font-size: 17px;
  background-color: ${(props) =>
    props.$theme == "light" ? "#C9D5D8" : "#0a2328"};
  outline: none;
  border-radius: 8px;
  color: ${(props) => (props.$theme == "light" ? "#0F2E35" : "#96adb3")};
   @media
    (max-width: 600px) {
    width: 100%;
  }
  border-radius: 8px;
  color: #96adb3;
`;
export function Header({ hideSearch }: { hideSearch?: boolean }) {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <DivStyled className="px-5 py-1 d-flex flex-row justify-content-between">
      <Col >
        <H1Styled>Welcome Raam , Adi</H1Styled>
        <PModified>September 12, 2024</PModified>
      </Col>

      {!hideSearch && (
        <Col className="position-relative mx-3 ">
          <InputMod $theme={theme} type="text" placeholder="search" />
          <ImgMod src="/searchIcons.png" />
        </Col>
      )}
      <Toggle></Toggle>
    </DivStyled>
  );
}
