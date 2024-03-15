import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import "./int.css";
import { SalesPitchers } from "../component/SalesPitchers";
import { useState } from "react";
import CenteredModal from "../component/modals/Modal";
import CustomInput from "../component/CustomInput";
import DragAndDrop from "../component/DragAndDrop";
import AgentRow from "../component/call/AgentRow";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Toggle from "../component/Toggle";

const H1Styled = styled.h4<{ theme: string }>`
  font-weight: bold;
  color: ${(props) => (props.theme === "light" ? "#051316" : "#96adb3")};
`;
const DivStyled = styled.div<{ theme: string }>`
  border-bottom: ${(props) =>
    props.theme === "light" ? "1px solid #9ABCC4" : "1px solid #0f2e35"};
  display: flex;

  @media (max-width: 600px) {
    margin-top: 40px;
  }
`;

const PModified = styled.p<{ theme: string }>`
  font-weight: bold;
  color: ${(props) => (props.theme == "light" ? "#0F2E35" : "#384b4f")};
`;

const FileCol = styled(Col)<{ theme: string }>`
  background: ${(props) =>
    props.theme === "light" ? "linear-gradient(#E6EDEF, #EDEFE6)" : " #0b2227"};
  color: ${(props) => (props.theme === "light" ? "#0F2E35" : "white")};
  height: fit-content;
  border-radius: 10px;
  border: ${(props) =>
    props.theme == "light" ? "1px solid #96ADB3" : "1px solid #0f2e35"};
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

const StyledH4 = styled.h4<{ theme: string }>`
  color: ${(props) => (props.theme === "light" ? "#0F2E35" : "#c9d5d8")};
`;
const ComponentDiv = styled.div<{ theme: string }>`
  border-bottom: ${(props) =>
    props.theme == "light" ? "1px solid #96ADB3" : "1px solid #0f2e35"};
  color: ${(props) => (props.theme === "light" ? "#0F2E35" : "#96adb3")};
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
const SalesCol = styled(Col)<{ theme: string }>`
  background: ${(props) =>
    props.theme === "light" ? "linear-gradient(#E6EDEF, #EDEFE6)" : " #0b2227"};
  border-radius: 10px;
  border: ${(props) =>
    props.theme == "light" ? "1px solid #96ADB3" : "1px solid #0f2e35"};
`;

const LinkP = styled.p<{ theme: string }>`
  color: ${(props) => (props.theme === "light" ? "#0F2E35" : "#c9d5d8")};
  &:hover {
    cursor: pointer;
  }
`;
const ComponentRender = styled.button<{ theme: string }>`
  border: 2px solid #96adb3;
  color: ${(props) => (props.theme === "light" ? "#0F2E35" : "#96adb3")};
  background-color: ${(props) =>
    props.theme === "light" ? "#FEFEFE" : "transparent"};
  border-radius: 25px;
  &:hover {
    background-color: ${(props) =>
      props.theme === "light" ? "#0F2E35" : "#4a666c"};
    color: ${(props) => (props.theme === "dark" ? "#0F2E35" : "#96adb3")};

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
const KnowledgeContainer = styled.div`
  height: 100vh;
`;
const PageContainer = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: space-between;
  @media (max-width: 625px) {
    flex-direction: column;
  }
`;
export function KnowledgePage({
  isSidebarOpened,
}: {
  isSidebarOpened: boolean;
}) {
  const [modalShow, setModalShow] = useState(false);
  const [nextModalShow, setNextModalShow] = useState(false);
  const [activeButton, setActiveButton] = useState("inbound");
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <KnowledgeContainer>
      <DivStyled
        theme={theme}
        className="px-5  justify-content-between d-flex align-items-center py-1"
      >
        <div>
          <H1Styled theme={theme}>Welcome Raam , Adi</H1Styled>
          <PModified theme={theme}>September 12, 2024</PModified>
        </div>
        <Toggle></Toggle>
      </DivStyled>

      <PageContainer>
        {isSidebarOpened && <AgentRow></AgentRow>}
        <Row className="pt-3 gap-5 flex-grow-1   px-lg-5 mx-lg-0 mx-4 ">
          <FileCol
            theme={theme}
            className="p-2 w-fit   d-flex  flex-column gap-3"
          >
            <StyledH4 theme={theme}>All files</StyledH4>
            {/* parental one */}
            <div className="d-flex flex-column gap-4">
              {/* one component */}
              <ComponentDiv
                theme={theme}
                className="d-flex  justify-content-between  pb-2"
              >
                <div className="d-flex flex-row align-items-baseline gap-2">
                  <CircledD></CircledD>
                  <p>Documents</p>
                </div>

                <div className="d-flex flex-column gap-0 align-items-center">
                  <p className="p-0 m-0">20 documents</p>
                  <p className="p-0 m-0">200m tokens</p>
                </div>
              </ComponentDiv>
              <ComponentDiv
                theme={theme}
                className="d-flex  justify-content-between "
              >
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
              <ComponentDiv
                theme={theme}
                className="d-flex  justify-content-between "
              >
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
              <ComponentDiv
                theme={theme}
                className="d-flex  justify-content-between "
              >
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
          <SalesCol theme={theme} className="d-flex flex-column gap-5 pt-3">
            <LinkP
              theme={theme}
              className="text-end"
              onClick={() => setModalShow(true)}
            >
              + <UnderLineSpan> upload Document</UnderLineSpan>
            </LinkP>

            <div className="d-flex flex-column gap-3">
              <div className="d-flex flex-wrap flex-lg-row flex-column gap-3">
                <ComponentRender
                  theme={theme}
                  onClick={() => setActiveButton("Inbound")}
                  className="py-2 flex-grow-1 px-3"
                >
                  Sales Pitches
                </ComponentRender>
                <ComponentRender
                  theme={theme}
                  onClick={() => setActiveButton("Outbound")}
                  className="py-2  flex-grow-1 px-3"
                >
                  Product Knowledge
                </ComponentRender>
                <ComponentRender
                  theme={theme}
                  onClick={() => setActiveButton("Inbound")}
                  className="py-2 flex-grow-1 px-3"
                >
                  Service guidelines
                </ComponentRender>
              </div>
              <SalesPitchers activeButton={activeButton} />
            </div>
          </SalesCol>
        </Row>
      </PageContainer>

      <CenteredModal
        children={
          <div className="d-flex flex-column gap-1">
            <label htmlFor="paste">Choose what type of document </label>
            <CustomInput
              name="type"
              label="Sales pitches"
              value="sales_pitches"
              active={""}
            ></CustomInput>
            <CustomInput
              name="type"
              active={""}
              label="Product knowledge"
              value="prod_knowledge"
            ></CustomInput>
            <CustomInput
              active={""}
              name="type"
              label="Service guidelines"
              value="service_guideline"
            ></CustomInput>
          </div>
        }
        show={modalShow}
        btnText="Next"
        onHide={() => setModalShow(false)}
        onContinue={() => {
          setModalShow(false);
          setTimeout(() => {}, 2000);
          setNextModalShow(true);
        }}
      ></CenteredModal>
      <CenteredModal
        children={
          <div
            className={`d-flex  flex-column gap-1 ${
              theme == "light" ? "light" : ""
            }`}
          >
            <div className="flex-grow flex-column">
              <label htmlFor="paste">Paste text</label>
              <input
                id="paste"
                type="text"
                className="custom_input"
                placeholder="Paste text"
              />
            </div>

            <DragAndDrop
              color={theme == "light" ? "#E5ECEE" : `rgba(5, 19, 22, 1)`}
            ></DragAndDrop>
          </div>
        }
        show={nextModalShow}
        btnText="Upload"
        onHide={() => setNextModalShow(false)}
        onContinue={() => setNextModalShow(false)}
      ></CenteredModal>
    </KnowledgeContainer>
  );
}
