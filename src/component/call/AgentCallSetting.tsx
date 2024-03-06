import styled from "styled-components";
const Paragraph = styled.div`
  margin-bottom: 0;
  font-size: 16px;
  color: #96adb3;
`;
const ParagraphBold = styled(Paragraph)`
  font-weight: bold;
  color: #c9d5d8;
`;
const EditIcon = styled.img`
  width: 20px;
`;
const AgentCallSettingCol = styled.div`
  background: linear-gradient(to bottom, #0f2e35, #17454f);
  border-radius: 16px;
`;

const Row = styled.div<{ $minute_container?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => (props.$minute_container ? "#224D57" : "")};
  border-radius: ${(props) => (props.$minute_container ? "20px" : "0px")};
  padding: ${(props) => (props.$minute_container ? "0px 12px" : "0px")};
`;
export function AgentCallSetting({ agent }: { agent: agentCalls }) {
  return (
    <AgentCallSettingCol className="px-3 py-3 d-flex flex-column gap-4">
      <div className="d-flex flex-row justify-content-between  gap-5">
        <div className="d-flex flex-row align-items-center gap-2">
          <ParagraphBold>{agent.name}</ParagraphBold>
          <EditIcon src="/editProfile.svg" alt="" className="" />
        </div>
        <div className="d-flex flex-row gap-2">
          <ParagraphBold>{agent.time}</ParagraphBold>
          <Paragraph>Average call time</Paragraph>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-between gap-5">
        <div className="d-flex flex-row align-items-center gap-3">
          <img src="/leads.svg" alt="" className=" w-50" />
          <Paragraph>{agent.message}</Paragraph>
        </div>

        <div className="d-flex flex-row align-items-center gap-2">
          <img src="/incoming_call.svg" alt="" className="w-50" />

          <Paragraph>{agent.receivedCalls}</Paragraph>
        </div>
        <div className="d-flex flex-row align-items-center gap-2">
          <img src="/finished_call.svg" alt="" className="w-50" />
          <Paragraph>{agent.missedCalls}</Paragraph>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-between gap-2 ">
        <Row
          $minute_container
          className="d-flex flex-row align-items-center gap-2"
        >
          <img src="/clockIcon.svg" />

          <Paragraph>{agent.minutesTalked}</Paragraph>
        </Row>
        <div className="d-flex flex-row justify-content-center gap-2 py-2">
          <Row
            $minute_container
            className="d-flex flex-row align-items-center gap-1"
          >
            <img src="/profile_delete.svg" alt="" />
            <Paragraph className="text-bold">{agent.client1}</Paragraph>
          </Row>

          <img src="/transfer.svg" alt="" />

          <Row
            $minute_container
            className="d-flex flex-row align-items-center gap-1"
          >
            <img src="/profile_checked.svg" alt="" />
            <Paragraph className="text-bold">{agent.client2}</Paragraph>
          </Row>
        </div>
      </div>
    </AgentCallSettingCol>
  );
}
