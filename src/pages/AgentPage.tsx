import { Col } from "react-bootstrap";
import { Header } from "../component/agents/Header";

import { AgentProfiles } from "../component/agents/AgentProfiles";
import styled from "styled-components";
import AgentRow from "../component/call/AgentRow";
const AgentPageContainer = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;
const PageContainer = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: space-between;
  @media (max-width: 625px) {
    flex-direction: column;
  }
`;


// agent page
export function AgentPage({ isSidebarOpened }: { isSidebarOpened: boolean }) {
  return (
    <AgentPageContainer>
      <Col className="px-0 ">
        <Header />
        <PageContainer>
          {isSidebarOpened && <AgentRow></AgentRow>}
          <AgentProfiles isSidebarOpened={isSidebarOpened} />
        </PageContainer>
      </Col>
    </AgentPageContainer>
  );
}
