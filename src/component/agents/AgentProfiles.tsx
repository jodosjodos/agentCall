import styled from "styled-components";
import { agents } from "../../data/agents";
import AgentModal from "./AgentModal";
import { useState } from "react";
import { Controller } from "./Controller";

const GridContainer = styled.div<{ $selected?: boolean }>`
  display: grid;
  flex-grow: 1;

  grid-template-columns: ${(props) =>
    props.$selected ? "repeat(1, 1fr)" : "repeat(1, 2fr)"};

  @media (max-width: 600px) {
    display: ${(props) => (props.$selected ? "none" : "block")};
  }

  @media (min-width: 600px) and (max-width: 1199px) {
    grid-template-columns: ${(props) =>
      props.$selected ? "repeat(1, 1fr)" : "repeat(2, 1fr)"};
  }

  @media (min-width: 1200px) and (max-width: 1999px) {
    grid-template-columns: ${(props) =>
      props.$selected ? "repeat(2, 1fr)" : "repeat(3, 1fr)"};
  }

  @media (min-width: 2000px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const AgentProfileContainer = styled.div`
  width: 100%;
`;
const AgentProfileSubContainer = styled.div<{ $selcted?: boolean }>`
  display: flex;
  width: 100%;
  @media (max-width: 600px) {
    width: ${(props) => (props.$selcted ? "0" : "100vw")};
    max-width: 100vw;
    flex-grow: 1;
  }
  height: calc(100vh - 94px);
  overflow: auto;
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
  @media (max-width: 600px) {
    width: 100vw;
    max-width: 100vw;
    flex-grow: 1;
  }
  width: 35%;
  background-color: #0b2227;
  height: calc(100vh - 129px);
`;
const Scroll = styled.div`
  height: 100%;
  overflow: auto;
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
const CallStep = styled.div<{
  $isFirst?: boolean;
  $background?: string;
  $isLast?: boolean;
}>`
  height: 39px;
  flex-grow: 1;
  padding: 6px, 12px;
  text-align: end;
  color: black;
  margin-top: 20px;
  background-color: ${(props) =>
    props.$background ? props.$background : "white"};
  border-top-left-radius: ${(props) => (props.$isFirst ? "20px" : "")};
  border-bottom-left-radius: ${(props) => (props.$isFirst ? "20px" : "")};
  border-top-right-radius: ${(props) => (props.$isLast ? "20px" : "")};
  border-bottom-right-radius: ${(props) => (props.$isLast ? "20px" : "")};
  gap: 8px;
`;
const CallContainer = styled.div`
  position: relative;
  width: 25%;
  margin-top: 30px;
`;
const CallProfile = styled.img<{ $isHidden?: boolean }>`
  position: absolute;
  top: -20px;
  right: 0px;
  width: 32px;
  height: 32px;
  border-radius: 20px;
  display: ${(props) => (!props.$isHidden ? "none" : "block")};
`;
export function AgentProfiles() {
  const [selectedAgent, setSelectedAgent] = useState<agentType | null>(null);
  const callSteps = [
    { name: "Intro", color: "#F0B723", active: true },
    { name: "Interest", color: "#E4F15026", active: false },
    { name: "Info", color: "#00B7DF26", active: false },
    { name: "Closing", color: "#0FBC0C26", active: false },
  ];
  return (
    <>
      <AgentProfileContainer className="d-flex">
        <AgentProfileSubContainer
          $selcted={selectedAgent != null}
          className="d-flex flex-column "
        >
          <Controller selected={selectedAgent != null}></Controller>
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
            <Scroll>
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
              <Paragraph className="text-white bold pb-3">
                Ongoing call
              </Paragraph>
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
                <Row>
                  {callSteps.map((item, i) => (
                    <CallContainer>
                      <CallProfile
                        src="/userProfile.png"
                        $isHidden={item.active}
                      ></CallProfile>
                      <CallStep
                        $isFirst={i == 0}
                        $isLast={i == callSteps.length - 1}
                        $background={item.color}
                      >
                        {item.name}
                      </CallStep>
                    </CallContainer>
                  ))}
                </Row>
              </OnGoingCall>
              <InputRow>
                <Input
                  id="paste"
                  type="text"
                  className=""
                  placeholder="Start typing ..."
                />
                <img src="/record.svg" alt="" />
              </InputRow>
            </Scroll>
          </AgentProfileLeft>
        )}
      </AgentProfileContainer>
    </>
  );
}
