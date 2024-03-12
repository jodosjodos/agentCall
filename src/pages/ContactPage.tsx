import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { ContactRecordTable } from "../component/contact/ContactRecordTable";

import ImportContact from "./ImportContact";
import AgentRow from "../component/call/AgentRow";

const CallPageContainer = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: space-between;
  @media (max-width: 625px) {
    flex-direction: column;
  }
`;
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

export function ContactPage({showImport,setShowImport,isSidebarOpened}:{showImport:boolean,setShowImport:any,isSidebarOpened:boolean}) {


  return (
    <>
      {!showImport ? (
        <Col>
          <DivStyled className="px-5 py-1">
            <H1Styled>Welcome Raam , Adi</H1Styled>
            <PModified>September 12, 2024</PModified> 
          </DivStyled>
          <CallPageContainer>
            {isSidebarOpened&&<AgentRow></AgentRow>}
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
