import { Col } from "react-bootstrap";
import { Header } from "../component/agents/Header";

import { AgentProfiles } from "../component/agents/AgentProfiles";
import styled from "styled-components";
const AgentPageContainer = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;
export function AgentPage() {
  return (
    <AgentPageContainer>
      <Col className="px-0 ">
        <Header />

        <AgentProfiles />
      </Col>
    </AgentPageContainer>
  );
}
