import React from "react";
import { Row } from "react-bootstrap";
import styled from "styled-components";
import { HomeController } from "./HomeController";

const H1Styled = styled.h4`
  color: #96adb3;
  font-weight: bold;
`;
const DivStyled = styled.div`
  border-bottom: 1px solid #0f2e35;

  padding: 0px 0px 0px 50px;
  @media (max-width: 993px) {
    padding-top: 40px !important;
    padding: 0 30px;
  }
`;

const PModified = styled.p`
  color: #384b4f;
  font-weight: bold;
`;

export function HeaderHome() {
  return (
    <DivStyled className="d-flex flex-wrap  flex-row  align-items-center justify-content-between">
      <Row className="">
        <H1Styled>Welcome Raam , Adi</H1Styled>
        <PModified>September 12, 2024</PModified>
      </Row>

      <div>
        <HomeController />
      </div>
    </DivStyled>
  );
}
