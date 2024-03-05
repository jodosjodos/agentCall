import { Col } from "react-bootstrap";
import { Header } from "../component/agents/Header";

import { AgentProfiles } from "../component/agents/AgentProfiles";

export function AgentPage() {
  return (
    <Col>
      <Header />
      
      <AgentProfiles />
    </Col>
  );
}
