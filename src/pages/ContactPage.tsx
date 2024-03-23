import { Col } from "react-bootstrap";
import styled from "styled-components";
import { ContactRecordTable } from "../component/contact/ContactRecordTable";

import ImportContact from "./ImportContact";
import AgentRow from "../component/call/AgentRow";
import Toggle from "../component/Toggle";

const CallPageContainer = styled.div`
  display: flex;
  overflow: hidden;
  flex:1;
  justify-content: space-between;
  @media (max-width: 625px) {
    flex-direction: column;
  }
`;
const H1Styled = styled.h4`
  color: #96adb3;
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
const PModified = styled.p`
  color: #384b4f;
  font-weight: bold;
`;

export function ContactPage({
  showImport,
  setShowImport,
  isSidebarOpened,
}: {
  showImport: boolean;
  setShowImport: any;
  isSidebarOpened: boolean;
}) {
  return (
    <>
      {!showImport ? (
        <Col>
          <DivStyled className="px-5  justify-content-between d-flex align-items-center py-1">
            <div>
              <H1Styled>Welcome Raam , Adi</H1Styled>
              <PModified>September 12, 2024</PModified>
            </div>
            <Toggle></Toggle>
          </DivStyled>
          <CallPageContainer>
            {isSidebarOpened && <AgentRow></AgentRow>}
            <ContactRecordTable
              onContinue={() => setShowImport(true)}
            ></ContactRecordTable>
          </CallPageContainer>
        </Col>
      ) : (
        <ImportContact isSidebarOpened={isSidebarOpened} />
      )}
    </>
  );
}
