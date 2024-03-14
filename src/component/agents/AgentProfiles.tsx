import styled from "styled-components";
import { agents } from "../../data/agents";
import AgentModal from "./AgentModal";
import { useState } from "react";
import { Controller } from "./Controller";
import { agentType } from "../../types/types";
import OngoingCallModal from "./OnGoingCall";
import CenteredModal from "../modals/Modal";
import Search from "../Search";
import SuccessMessage from "./successMessage";

const GridContainer = styled.div<{
  $selected?: boolean;
  $isSidebarOpened?: boolean;
}>`
  display: grid;
  flex-grow: 1;

  grid-template-columns: ${(props) =>
    props.$selected ? "repeat(1, 1fr)" : "repeat(1, 1fr)"};

  @media (max-width: 712px) {
    display: ${(props) => (props.$selected ? "none" : "grid")};
    flex-direction: column;
    grid-template-columns: ${(props) =>
      props.$selected ? "repeat(1, 1fr)" : "repeat(2, 1fr)"};
    
    gap: 20px;
   }
  
   @media (min-width: 712px) and (max-width:1449px) {
    
    grid-template-columns: ${(props) =>
      props.$selected ? "repeat(1, 1fr)" : "repeat(2, 1fr)"};
    
    gap: 20px;
   }
  
 
  @media (min-width: 1450px) and (max-width: 1999px) {
    grid-template-columns: ${(props) =>
      props.$selected && !props.$isSidebarOpened
        ? "repeat(2, 1fr)"
        : props.$selected && props.$isSidebarOpened
        ? "repeat(1, 1fr)"
        : "repeat(3, 1fr)"};
      
  }

 
  @media (min-width:1999px){
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
  }
  
  editProfilelate-columns: repeat(4, 1fr);
  }
`;

const AgentProfileContainer = styled.div`
  width: 100%;
  padding: 20px;
`;
const AgentProfileSubContainer = styled.div<{
  $selcted?: boolean;
  $isSidebarOpened?: boolean;
}>`
  display: flex;
  width: 100%;

  @media (max-width: 1534px) {
    display: ${(props) =>
      props.$selcted ? "none !important" : "block !important"};
    width: ${(props) => (props.$selcted ? "0" : "100vw")};
    max-width: 100%;
    flex-grow: 1;
  }
  height: calc(100vh - 96px);
  overflow: auto;
`;

const AgentProfileLeft = styled.div`
  max-width: 600px;

  margin: 20px 10px 0px px;
  padding: 10px;
  border-radius: 10px;
  @media (max-width: 1534px) {
    width: 100%;
    max-width: 100%;
    flex-grow: 1;
  }
  width: 35%;

  min-width: 470px;
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
  flex-grow: 1;
  gap: 10px;
  border-radius: 20px;
  padding: 10px;
  background: linear-gradient(93.55deg, #096348 13.97%, #25955f 89.16%);
`;
const OnGoingCallRow1 = styled.button`
  display: flex;
  flex-grow: 1;
  gap: 10px;
  border-radius: 20px;
  padding: 10px;
  background: rgba(11, 34, 39, 1);
  border: 1px solid rgba(14, 43, 49, 1);
`;
const GreenContainer = styled.div`
  border-radius: 16px;
  background-color: rgba(38, 246, 96, 0.15);
  padding: 4px 8px;
  display: flex;
  max-width: fit-content;

  color: rgba(16, 122, 71, 1);
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
  display: flex;
  align-items: center;
  justify-content: end;
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
const CallOnQueParagraph = styled.p`
  font-size: 20px;
  color: rgba(201, 213, 216, 1);
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
`;
const SeAllButton = styled.button`
  background-color: rgba(15, 46, 53, 1);
  border-radius: 24px;
  padding: 4px 10px;
  border: none;
  color: rgba(201, 213, 216, 1);
  height: 37px;
`;
export function AgentProfiles({
  isSidebarOpened,
}: {
  isSidebarOpened: boolean;
}) {
  const [selectedAgent, setSelectedAgent] = useState<agentType | null>(null);
  const callSteps = [
    { name: "Intro", color: "#F0B723", active: true },
    { name: "Interest", color: "#E4F15026", active: false },
    { name: "Info", color: "#00B7DF26", active: false },
    { name: "Closing", color: "#0FBC0C26", active: false },
  ];
  const [showModal, setShowModal] = useState(false);
  const [showRedirect, setShowRedirect] = useState(false);
  const [success, setSuccess] = useState(false);
  return (
    <>
      <AgentProfileContainer className="d-flex agent-profile">
        <AgentProfileSubContainer
          $selcted={selectedAgent != null}
          className="d-flex agent-profile flex-column "
        >
          <Controller selected={selectedAgent != null}></Controller>
          <GridContainer
            $selected={selectedAgent != null}
            $isSidebarOpened={isSidebarOpened}
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
            <Scroll className="agent-profile">
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
                <GreenContainer className="gap-1">
                  <img src="/green-wave.svg" alt="" />
                  Ongoing call with +84965482487
                </GreenContainer>
                <Row className="py-2">
                  <Row className="gap-2">
                    <Paragraph>00:40:01</Paragraph>
                    <img src="/wave.svg" alt="" />
                  </Row>
                </Row>
                <div className="d-flex flex-grow-1 gap-2">
                  <OnGoingCallRow1
                    onClick={() => setShowRedirect(true)}
                    className="p-2"
                  >
                    <OnGoingCallRowParagraph>
                      Redirect call
                    </OnGoingCallRowParagraph>
                    <img src="/forward.svg"></img>
                  </OnGoingCallRow1>
                  <OnGoingCallRow className="p-2">
                    <OnGoingCallRowParagraph>Listen in</OnGoingCallRowParagraph>
                    <img src="/resume.svg"></img>
                  </OnGoingCallRow>
                </div>
                <Row>
                  {callSteps.map((item, i) => (
                    <CallContainer key={i}>
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
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <CallOnQueParagraph>Calls on queue</CallOnQueParagraph>
                  <p className="primary-text">
                    Drag numbers to re-arrange numbers on queue
                  </p>
                </div>
                <SeAllButton onClick={() => setShowModal(true)}>
                  See all
                </SeAllButton>
              </div>
            </Scroll>
          </AgentProfileLeft>
        )}
      </AgentProfileContainer>
      <OngoingCallModal
        show={showModal}
        onHide={() => setShowModal(false)}
      ></OngoingCallModal>
      <CenteredModal
        show={showRedirect}
        onHide={() => setShowRedirect(false)}
        btnText="Redirect call"
        onContinue={() => {
          setShowRedirect(false);
          setTimeout(() => {}, 2000);
          setSuccess(true);
        }}
        children={<Search placeholder="e.g +442345678"></Search>}
      ></CenteredModal>
      <SuccessMessage
        show={success}
        onHide={() => setSuccess(false)}
      ></SuccessMessage>
    </>
  );
}
