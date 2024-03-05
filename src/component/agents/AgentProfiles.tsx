import styled from "styled-components";
import { agents } from "../../data/agents";
import AgentModal from "./AgentModal";
import { useState } from "react";
import { Controller } from "./Controller";
const GridContainer = styled.div<{ $selected?: boolean }>`
  display: grid;
  flex-grow: 1;
  grid-template-columns:${(props) =>
    props.$selected
      ? "repeat(1, 1fr)"
      : "repeat(2,1fr)"} ; /* Two columns by default */

  @media (min-width: 768px) {
    grid-template-columns:${(props) =>
      props.$selected ? "repeat(2, 1fr)" : "repeat(3,1fr)"} ; 
`;
const AgentProfileContainer = styled.div`
  width: 100%;
`;
const AgentProfileSubContainer = styled.div`
  display: flex;
  width: 100%;
`;

export function AgentProfiles() {
  const [selectedAgent, setSelectedAgent] = useState<agentType | null>(null);
  return (
    <AgentProfileContainer className="d-flex">
      <AgentProfileSubContainer className="d-flex flex-column ">
        <Controller></Controller>
        <GridContainer
          $selected={selectedAgent != null}
          className="gap-5  px-4"
        >
          {agents.map((agent) => (
            <AgentModal
              onclick={() => {
                setSelectedAgent(agent);
              }}
              key={agent.id}
              agent={agent}
            />
          ))}
        </GridContainer>
      </AgentProfileSubContainer>

      {selectedAgent != null && (
        <AgentModal isLeft={true} key={selectedAgent.id} agent={selectedAgent}></AgentModal>
      )}
    </AgentProfileContainer>
  );
}
