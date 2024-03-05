import { Col } from "react-bootstrap";
import { Header } from "../component/agents/Header";
import { Controller } from "../component/agents/Controller";
import { AgentProfiles } from "../component/agents/AgentProfiles";

export function AgentPage() {
  return (
    <Col>
      <Header />
      <Controller />
      <AgentProfiles />
    </Col>
  );
}
