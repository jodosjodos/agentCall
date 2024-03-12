import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
// compaign table
import CampaignTable from "../component/compaign/CampaignTable";
import AgentRow from "../component/call/AgentRow";

const CampaignPageContainer = styled.div`
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


function CampaignPage({isSidebarOpened}:{isSidebarOpened:boolean}) {
  return (
    <Col>
      <DivStyled className="px-5 py-1">
        <H1Styled>Welcome Raam , Adi</H1Styled>
        <PModified>September 12, 2024</PModified>
      </DivStyled>
      <CampaignPageContainer>
        {isSidebarOpened&&<AgentRow></AgentRow>}
        <CampaignTable></CampaignTable>
      </CampaignPageContainer>
    </Col>
  );
}
export default CampaignPage