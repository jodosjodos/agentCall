import styled from "styled-components";
import { agents } from "../../data/agents";
import AgentModal from "./AgentModal";
import { useState } from "react";
import { Controller } from "./Controller";
const GridContainer = styled.div<{ $selected?: boolean }>`
  display: grid;
  flex-grow: 1;
  grid-template-columns:${(props) =>
    props.$selected ? "repeat(1, 1fr)" : "repeat(2,1fr)"} ;

        
  @media (min-width: 2000px) {
display:grid;
grid-template-columns:${(props) =>
  props.$selected ? "repeat(4, 1fr)" : "repeat(3,1fr)"} ;


  };
       @media (max-width: 2000px) {
        grid-template-columns:${(props) =>
          props.$selected ? "repeat(2, 1fr)" : "repeat(3,1fr)"}
           ; 
`;
const AgentProfileContainer = styled.div`
  width: 100%;
`;
const AgentProfileSubContainer = styled.div`
  display: flex;
  width: 100%;
`;
const AgentProfileLeft = styled.div`
  max-width: 600px;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border-radius: 10px;
  width: 35%;
  background-color: #0b2227;
  height: calc(100vh - 129px);
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Paragraph = styled.p`
  color: #96adb3;
  margin-bottom: 0;
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
        <AgentProfileLeft>
          <Row className="gap-2 w-full justify-content-end ">
            <Row
              className="gap-2 align-items-center cursor-pointer"
              onClick={() => setSelectedAgent(null)}
            >
              <Paragraph>Close</Paragraph>
              <img src="/close.svg" alt="close" />
            </Row>
          </Row>
          <AgentModal
            isLeft={true}
            key={selectedAgent.id}
            agent={selectedAgent}
          ></AgentModal>
        </AgentProfileLeft>
      )}
    </AgentProfileContainer>
  );
}
