import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import "./int.css";
import { SalesPitchers } from "../component/SalesPitchers";
const H1Styled = styled.h4`
  color: #96adb3;
  font-weight: bold;
`;
const DivStyled = styled.div`
  border-bottom: 1px solid #0f2e35;
  display: flex;
  flex-direction: column;
`;

const PModified = styled.p`
  color: #384b4f;
  font-weight: bold;
`;

const FileCol = styled(Col)`
  background-color: #0b2227;
  color: White;
  border-radius: 10px;
  border: 1px solid #0f2e35;
`;

const CircledD = styled.p`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #e4f150;
`;

const CircledS = styled.p`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #f0b723;
`;

const CircledA = styled.p`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #f71b17;
`;
const CircledV = styled.p`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #0fbc0c;
`;

const StyledH4 = styled.h4`
  color: #c9d5d8;
`;
const ComponentDiv = styled.div`
  border-bottom: 1px solid #0f2e35;
  color: #96adb3;
`;
const ParentProgressBar = styled.div`
  border: 2px solid #09bed7;
  border-radius: 20px;
  padding: 5px;
`;
const ChildProgressBar = styled.div`
  background-color: #09bed7;
  border-radius: 20px;
  color: black;
  width: 90%;
  padding-inline: 5px;
`;

// sales
const SalesCol = styled(Col)`
  background-color: #0b2227;
  border-radius: 10px;
`;

const LinkP = styled.p`
  color: #c9d5d8;
  &:hover {
    cursor: pointer;
  }
`;
const ComponentRender = styled.button`
  border: 2px solid #96adb3;
  color: #96adb3;
  background-color: transparent;
  border-radius: 25px;
  &:hover {
    background-color: #4a666c;
    border-color: #96adb3;
  }
  &:active {
    background-color: #4a666c;
    border-color: #96adb3;
  }
`;
const UnderLineSpan = styled.span`
  text-decoration: underline;
`;
export function KnowledgePage() {
  return (
    <Col>
      <DivStyled className="px-5 py-1">
        <H1Styled>Welcome Raam , Adi</H1Styled>
        <PModified>September 12, 2024</PModified>
      </DivStyled>
      <Row sm={3} className="pt-3 px-5 ">
        <FileCol lg={3} className="p-2 d-flex flex-column gap-3">
          <StyledH4>All files</StyledH4>
          {/* parental one */}
          <div className="d-flex flex-column gap-4">
            {/* one component */}
            <ComponentDiv className="d-flex  justify-content-between  pb-2">
              <div className="d-flex flex-row align-items-baseline gap-2">
                <CircledD></CircledD>
                <p>Documents</p>
              </div>

              <div className="d-flex flex-column gap-0 align-items-center">
                <p className="p-0 m-0">20 documents</p>
                <p className="p-0 m-0">200m tokens</p>
              </div>
            </ComponentDiv>
            <ComponentDiv className="d-flex  justify-content-between ">
              <div className="d-flex flex-row align-items-baseline gap-2">
                <CircledS></CircledS>
                <p>SpreadSheet</p>
              </div>

              <div className="d-flex flex-column gap-0 align-items-center">
                <p className="p-0 m-0 text-end" style={{ width: "100%" }}>
                  3 sheets
                </p>
                <p className="p-0 m-0">200m tokens</p>
              </div>
            </ComponentDiv>
            <ComponentDiv className="d-flex  justify-content-between ">
              <div className="d-flex flex-row align-items-baseline gap-2">
                <CircledA></CircledA>
                <p>Audio</p>
              </div>

              <div className="d-flex flex-column gap-0 align-items-center">
                <p className="p-0 m-0 text-end" style={{ width: "100%" }}>
                  38 files
                </p>
                <p className="p-0 m-0"> 956.5 minutes</p>
              </div>
            </ComponentDiv>
            <ComponentDiv className="d-flex  justify-content-between ">
              <div className="d-flex flex-row align-items-baseline gap-2">
                <CircledV></CircledV>
                <p>Video</p>
              </div>

              <div className="d-flex flex-column gap-0 align-items-center">
                <p className="p-0 m-0  text-end" style={{ width: "100%" }}>
                  38 files
                </p>
                <p className="p-0 m-0 "> 956.5 minutes</p>
              </div>
            </ComponentDiv>
          </div>
          <div>
            <p>90/100files</p>

            <ParentProgressBar>
              <ChildProgressBar className="text-end">90%</ChildProgressBar>
            </ParentProgressBar>
          </div>
        </FileCol>
        <SalesCol lg={9} className="d-flex flex-column gap-5 pt-3">
          <LinkP className="text-end">
            + <UnderLineSpan> upload Document</UnderLineSpan>
          </LinkP>
          <div className="d-flex flex-column gap-3">
            <div className="d-flex flex-row gap-3">
              <ComponentRender className="py-2 px-3">
                Sales Pitches
              </ComponentRender>
              <ComponentRender className="py-2 px-3">
                Product Knowledge
              </ComponentRender>
              <ComponentRender className="py-2 px-3">
                Service guidelines
              </ComponentRender>
            </div>
            <SalesPitchers />
          </div>
        </SalesCol>
      </Row>
    </Col>
  );
}
