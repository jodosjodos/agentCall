import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store";

const H1Styled = styled.h4`
  color: #96adb3;
  font-weight: bold;
`;
const DivStyled = styled(Row)`
  border-bottom: 1px solid #0f2e35;
  display: flex;
  flex-direction: column;
  @media (max-width: 993px) {
    padding-top: 40px !important;
  }
`;

const PModified = styled.p`
  color: #384b4f;
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
  color: #96adb3;
  @media (max-width: 600px) {
    width: 100%;
  }
  border-radius: 8px;
  color: #96adb3;
`;
export function Header({ hideSearch }: { hideSearch?: boolean }) {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <DivStyled className="px-5 py-1 d-flex flex-row justify-content-between">
      <Col lg={10}>
        <H1Styled>Welcome Raam , Adi</H1Styled>
        <PModified>September 12, 2024</PModified>
      </Col>

      {!hideSearch && (
        <Col lg={2} className="position-relative ">
          <InputMod $theme={theme} type="text" placeholder="search" />
          <ImgMod src="/searchIcons.png" />
        </Col>
      )}
    </DivStyled>
  );
}
