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
const AgentContainer = styled.div<{ $isLeft?: boolean }>`
  border-radius: 16px;
  padding: 12px;
  color: white;
  max-width: ${(props) => (props.$isLeft ? "500px" : "550px")};
  height: fit-content;
  width: ${(props) => (props.$isLeft ? "50%" : "320px")};
  @media (max-width: 993px) {
    width: 100%;
    max-width: 100%;
  }
  min-width: ${(props) => (props.$isLeft ? "380px" : "380px")};
  background: ${(props) =>
    props.$isLeft
      ? "transparent"
      : "linear-gradient(180deg, #092227 0%, #17434d 110.97%)"};
`;
const Row = styled.div<{ $minute_container?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => (props.$minute_container ? "#224D57" : "")};
  border-radius: ${(props) => (props.$minute_container ? "20px" : "0px")};
  padding: ${(props) => (props.$minute_container ? "2px 6px" : "0px")};
`;
const Paragraph = styled.div`
  margin-bottom: 0;
  color: #96adb3;
`;
function AgentModal({
  agent,
  onclick,
  isLeft,
}: {
  agent: AgentProfile;
  onclick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  isLeft?: boolean;
}) {
  return (
    <AgentContainer $isLeft={isLeft} onClick={onclick}>
      <Row className="d-flex flex-row">
        <div>
          <img src={agent.profile} alt="" />
        </div>

        <div>
          <Paragraph className="text-end py-2">{agent.time}</Paragraph>
          <Paragraph className="text-end pb-2 ">Average call time</Paragraph>
          <Row className="gap-2">
            <img src="/rateTime.svg" />
            <Paragraph className="mb-0">min yesterday</Paragraph>
          </Row>
        </div>
      </Row>
      <Row className="justify-content-start py-2 gap-2">
        <Paragraph>{agent.name}</Paragraph>
        <EditIcon src="/editProfile.svg" alt="" className="" />
      </Row>
      <Row>
        <Paragraph>Minutes talked</Paragraph>
        <Row $minute_container className="gap-1">
          <img src="/clockIcon.svg" alt="" />

          <Paragraph>{agent.minutesTalked}</Paragraph>
        </Row>
      </Row>
      <Row className="py-2 ">
        <Paragraph>Completed Leads</Paragraph>
        <Row className="gap-1">
          <img src="/leads.svg" alt="" />
          <Paragraph>{agent.completedLeads}</Paragraph>
        </Row>
      </Row>
      <Row className="py-2 ">
        <Paragraph>Incoming calls</Paragraph>
        <Row className="gap-1">
          <img src="/incoming_call.svg" alt="" />

          <Paragraph>{agent.IncomingCalls}</Paragraph>
        </Row>
      </Row>
      <Row className="py-2 ">
        <Paragraph>Finished Calls</Paragraph>
        <Row className="gap-1">
          <img src="/finished_call.svg" alt="" />
          <Paragraph>{agent.FinishedCalls}</Paragraph>
        </Row>
      </Row>
      {!isLeft && (
        <>
          <Paragraph className="text-center">Follow up container</Paragraph>

          <Row className="justify-content-center gap-2 py-2">
            <Row $minute_container>
              <img src="/profile_delete.svg" alt="" width={20} />
              <Paragraph className="text-bold">21</Paragraph>
            </Row>

            <img src="/transfer.svg" alt="" width={20} />

            <Row $minute_container>
              <img src="/profile_checked.svg" alt="" width={20} />
              <Paragraph className="text-bold">21</Paragraph>
            </Row>
          </Row>
        </>
      )}
    </AgentContainer>
  );
}

export default AgentModal;
