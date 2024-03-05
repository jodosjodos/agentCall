import { Col } from "react-bootstrap";
import { Header } from "../component/agents/Header";
import { Controller } from "../component/agents/Controller";

export function AgentPage() {
  return (
    <Col>
      <Header />
      <Controller />
    </Col>
  );
}
