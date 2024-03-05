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
const Input = styled.input`
  flex-grow: 1;
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
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
const InputRow = styled.div`
  display: flex;
  padding: 10px 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
  background-color: #051316;
`;

const Paragraph = styled.p`
  color: #96adb3;
  margin-bottom: 0;
`;
const OnGoingCall = styled.div`
  background-color: #051316;
  padding: 16px, 12px;
  border-radius: 16px;
  padding: 10px;
  gap: 64px;
  margin-bottom: 20px;
`;
const OnGoingCallRow = styled.div`
  display: flex;
  gap: 10px;
  border-radius: 20px;
  padding: 10px;
  background: linear-gradient(93.55deg, #096348 13.97%, #25955f 89.16%);
`;
const OnGoingCallRowParagraph = styled.div`
  color: white;
`;
export function AgentProfiles() {
  const [selectedAgent, setSelectedAgent] = useState<agentType | null>(null);
  return (
    <>
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
            <Paragraph className="text-white bold">Ongoing call</Paragraph>
            <OnGoingCall className="p">
              <Paragraph>Ongoing call with +84965482487</Paragraph>
              <Row className="py-2">
                <Row className="gap-2">
                  <img src="/wave.svg" alt="" />
                  <Paragraph>00:40:01</Paragraph>
                </Row>
                <OnGoingCallRow className="p-2">
                  <OnGoingCallRowParagraph>Listen in</OnGoingCallRowParagraph>
                  <img src="/resume.svg"></img>
                </OnGoingCallRow>
              </Row>
            </OnGoingCall>
            <InputRow>
              <Input
                id="paste"
                type="text"
                className=""
                placeholder="Paste text"
              />
              <img src="/record.svg" alt="" />
            </InputRow>
          </AgentProfileLeft>
        )}
      </AgentProfileContainer>
    </>
  );
}
