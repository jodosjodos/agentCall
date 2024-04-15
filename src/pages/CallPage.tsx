import { Col } from "react-bootstrap";
import styled from "styled-components";
import AgentRow from "../component/call/AgentRow";
import RecordingTable from "../component/call/RecordingTable";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Toggle from "../component/Toggle";

const CallPageContainer = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: space-between;
  @media (max-width: 625px) {
    flex-direction: column;
  }
`;
const H1Styled = styled.h4<{ theme: string }>`
  color: ${(props) => (props.theme === "light" ? "#051316" : "#96adb3")};
  font-weight: bold;
`;
const DivStyled = styled.div<{ theme: string }>`
  width: 100%;
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
export function CallPage({ isSidebarOpened }: { isSidebarOpened: boolean }) {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <Col>
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
      <CallPageContainer>
        {isSidebarOpened && <AgentRow></AgentRow>}
        <RecordingTable></RecordingTable>
      </CallPageContainer>
    </Col>
  );
}
