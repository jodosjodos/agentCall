import React from "react";
import styled from "styled-components";

interface AgentProfile {
  profile: string;
  name: string;
  time: string;
  minutesTalked: string;
  completedLeads: string;
  IncomingCalls: string;
  FinishedCalls: string;
  client1: number;
  client2: number;
  id: number;
}
const EditIcon = styled.img`
  with: 10px;
`;
const AgentContainer = styled.div<{ $isLeft?: boolean; $theme?: string }>`
  border-radius: 16px;
  padding: 12px;
  flex-grow: 1;
  color: white;
  max-width: ${(props) => (props.$isLeft ? "500px" : "550px")};
  height: fit-content;

  @media (max-width: 1456px) {
    max-width: 98%;
    min-width: 98%;
    margin-bottom: 10px;
  }
  @media (min-width: 1500px) and (max-width: 1999px) {
    width: 100%;
  }
  min-width: ${(props) => (props.$isLeft ? "400px" : "400px")};
  background: ${(props) =>
    props.$isLeft
      ? "transparent"
      : props.$theme == "light"
      ? "linear-gradient(180deg, #E6EDEF 0%, #E3EAEC 77.4%)"
      : "linear-gradient(180deg, #092227 0%, #17434d 110.97%)"};
`;
const Row = styled.div<{ $minute_container?: boolean; $theme?: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) =>
    props.$minute_container && props.$theme == "light"
      ? "rgba(201, 213, 216, 1)"
      : !props.$minute_container
      ? ""
      : "#224D57"};
  border-radius: ${(props) => (props.$minute_container ? "20px" : "0px")};
  padding: ${(props) => (props.$minute_container ? "2px 6px" : "0px")};
`;
const Paragraph = styled.div<{ $theme: string }>`
  margin-bottom: 0;
  color: ${(props) => (props.$theme == "light" ? "#0F2E35" : "#96adb3")};
`;
function AgentModal({
  agent,
  onclick,
  isLeft,
  theme,
}: {
  agent: AgentProfile;
  onclick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  isLeft?: boolean;
  theme: string;
}) {
  return (
    <AgentContainer $isLeft={isLeft} onClick={onclick} $theme={theme}>
      <Row className="d-flex flex-row">
        <div>
          <img src={agent.profile} />
        </div>

        <div>
          <Paragraph $theme={theme} className="text-end py-2">
            {agent.time}
          </Paragraph>
          <Paragraph $theme={theme} className="text-end pb-2 ">
            Average call time
          </Paragraph>
          <Row className="gap-2">
            <img src="/rateTime.svg" />
            <Paragraph $theme={theme} className="mb-0">
              min yesterday
            </Paragraph>
          </Row>
        </div>
      </Row>
      <Row className="justify-content-start py-2 gap-2">
        <Paragraph $theme={theme}>{agent.name}</Paragraph>
        <EditIcon src="/editProfile.svg" alt="" className="" />
      </Row>
      <Row>
        <Paragraph $theme={theme}>Minutes talked</Paragraph>
        <Row $minute_container $theme={theme} className="gap-1">
          <img src="/clockIcon.svg" alt="" />

          <Paragraph $theme={theme}>{agent.minutesTalked}</Paragraph>
        </Row>
      </Row>
      <Row className="py-2 ">
        <Paragraph $theme={theme}>Completed Leads</Paragraph>
        <Row className="gap-1">
          <img src="/leads.svg" alt="" />
          <Paragraph $theme={theme}>{agent.completedLeads}</Paragraph>
        </Row>
      </Row>
      <Row className="py-2 ">
        <Paragraph $theme={theme}>Incoming calls</Paragraph>
        <Row className="gap-1">
          <img src="/incoming_call.svg" alt="" />

          <Paragraph $theme={theme}>{agent.IncomingCalls}</Paragraph>
        </Row>
      </Row>
      <Row className="py-2 ">
        <Paragraph $theme={theme}>Finished Calls</Paragraph>
        <Row className="gap-1">
          <img src="/finished_call.svg" alt="" />
          <Paragraph $theme={theme}>{agent.FinishedCalls}</Paragraph>
        </Row>
      </Row>
      {!isLeft && (
        <>
          <Paragraph $theme={theme} className="text-center">
            Follow up container
          </Paragraph>

          <Row className="justify-content-center gap-2 py-2">
            <Row $theme={theme} $minute_container>
              <img src="/profile_delete.svg" alt="" width={20} />
              <Paragraph $theme={theme} className="text-bold">
                21
              </Paragraph>
            </Row>

            <img src="/transfer.svg" alt="" width={20} />

            <Row $theme={theme} $minute_container>
              <img src="/profile_checked.svg" alt="" width={20} />
              <Paragraph $theme={theme} className="text-bold">
                21
              </Paragraph>
            </Row>
          </Row>
        </>
      )}
    </AgentContainer>
  );
}

export default AgentModal;
