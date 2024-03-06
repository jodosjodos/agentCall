import React from "react";
import {  Col, Row } from "react-bootstrap";
import styled from "styled-components";

const H1Styled = styled.h4`
  color: #96adb3;
  font-weight: bold;
`;
const DivStyled = styled(Row)`
  border-bottom: 1px solid #0f2e35;
  display: flex;
  flex-direction: column;
`;

const PModified = styled.p`
  color: #384b4f;
  font-weight: bold;
`;

const ImgMod = styled.img`
  width: 23px;
  position: absolute;
  right: 45px;
  top: 17px;
`;
const InputMod = styled.input`
  float: right;
  padding: 6px 6px;
  border: none;
  margin-top: 8px;
  margin-right: 16px;
  font-size: 17px;
  background-color: #0a2328;
  outline: none;
  border-radius:8px;
  color:#96ADB3;


`;
export function Header() {
  return (
    <DivStyled className="px-5 py-1 d-flex flex-row justify-content-between">
      <Col lg={10}>
        <H1Styled>Welcome Raam , Adi</H1Styled>
        <PModified>September 12, 2024</PModified>
      </Col>

      <Col lg={2} className="position-relative">
        <InputMod type="text" placeholder="search" />
        <ImgMod  src="/searchIcons.png" />
      </Col>
    </DivStyled>
  );
}
