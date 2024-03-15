import styled from "styled-components";
import { agentCalls } from "../../types/types";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
const Paragraph = styled.div<{ theme: string }>`
  margin-bottom: 0;
  font-size: 16px;
  color: ;
  color: ${(props) => (props.theme === "light" ? "#0F2E35" : "#96adb3")};
`;
const ParagraphBold = styled(Paragraph)<{ theme: string }>`
  font-weight: bold;
  color: ${(props) => (props.theme === "light" ? "#0F2E35" : "#c9d5d8")};
`;
const EditIcon = styled.img`
  width: 20px;
`;
const AgentCallSettingCol = styled.div<{ theme: string }>`
  background: ${(props) =>
    props.theme === "light"
      ? "linear-gradient(#E6EDEF, #EDEFE6)"
      : "linear-gradient(to bottom, #0f2e35, #17454f)"};
  border-radius: 16px;
`;

const Row = styled.div<{ $minute_container?: boolean; theme: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) =>
    props.$minute_container
      ? props.theme == "light"
        ? "#C9D5D8"
        : "#224D57"
      : props.theme == "light"
      ? "#C9D5D8"
      : "#224D57"};
  border-radius: ${(props) => (props.$minute_container ? "20px" : "0px")};
  padding: ${(props) => (props.$minute_container ? "0px 12px" : "0px")};
`;
export function AgentCallSetting({ agent }: { agent: agentCalls }) {
  const theme = useSelector((state: RootState) => state.theme.theme);
  //TODO:change image, scrollbar color

  return (
    <AgentCallSettingCol
      theme={theme}
      className="px-3 py-3 d-flex flex-column gap-4"
    >
      <div className="d-flex flex-row justify-content-between  gap-5">
        <div className="d-flex flex-row align-items-center gap-2">
          <ParagraphBold theme={theme}>{agent.name}</ParagraphBold>
          <EditIcon src="/editProfile.svg" alt="" className="" />
        </div>
        <div className="d-flex flex-row gap-2">
          <ParagraphBold theme={theme}>{agent.time}</ParagraphBold>
          <Paragraph theme={theme}>Average call time</Paragraph>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-between gap-5">
        <div className="d-flex flex-row align-items-center gap-3">
          <img src="/leads.svg" alt="" className=" w-50" />
          <Paragraph theme={theme}>{agent.message}</Paragraph>
        </div>

        <div className="d-flex flex-row align-items-center gap-2">
          <img src="/incoming_call.svg" alt="" className="w-50" />

          <Paragraph theme={theme}>{agent.receivedCalls}</Paragraph>
        </div>
        <div className="d-flex flex-row align-items-center gap-2">
          <img src="/finished_call.svg" alt="" className="w-50" />
          <Paragraph theme={theme}>{agent.missedCalls}</Paragraph>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-between gap-2 ">
        <Row
          $minute_container
          className="d-flex flex-row align-items-center gap-2"
          theme={theme}
        >
          <img src="/clockIcon.svg" />

          <Paragraph theme={theme}>{agent.minutesTalked}</Paragraph>
        </Row>
        <div className="d-flex flex-row justify-content-center gap-2 py-2">
          <Row
            $minute_container
            className="d-flex flex-row align-items-center gap-1"
            theme={theme}
          >
            <img src="/profile_delete.svg" alt="" />
            <Paragraph theme={theme} className="text-bold">
              {agent.client1}
            </Paragraph>
          </Row>

          <img src="/transfer.svg" alt="" />

          <Row
            $minute_container
            theme={theme}
            className="d-flex flex-row align-items-center gap-1"
          >
            <img src="/profile_checked.svg" alt="" />
            <Paragraph theme={theme} className="text-bold">
              {agent.client2}
            </Paragraph>
          </Row>
        </div>
      </div>
    </AgentCallSettingCol>
  );
}
