import React from "react";
import styled from "styled-components";
import { agentCallSetting } from "../../data/agents";
import { AgentCallSetting } from "./AgentCallSetting";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
const AgentRowContainer = styled.div<{ theme: string }>`
  padding: 24px 26px;
  background-color: ${(props) =>
    props.theme === "light" ? "#FEFEFE" : "#040f12"};
  height: calc(100vh - 100px);
  overflow-y: auto;

  min-width: 380px;
  width: fit-content;

  @media (max-width: 992px) {
    width: 100%;

    min-width: fit-content;
  }
`;

const ImgMod = styled.img`
  width: 23px;
  position: absolute;
  right: 8px;
  top: 18px;
`;
const InputMod = styled.input<{ theme: string }>`
  float: right;
  padding: 6px 6px;
  border: none;
  margin-top: 8px;
  font-size: 17px;
  background-color: ${(props) => (props.theme === "light" ? "#C9D5D8" : "#0a2328")};
  outline: none;
  border-radius: 8px;
  color: #96adb3;
  @media (max-width: 600px) {
    width: 100%;
  }
  border-radius: 8px;
  color: #96adb3;
`;

const AgentCallSettingContainer = styled.div`
  display: flex;
  flex-direction: column;

  flex-wrap: wrap;
`;
function AgentRow() {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <AgentRowContainer
      theme={theme}
      className="d-flex agent-row flex-column gap-5 "
    >
      <div className="position-relative  w-100">
        <InputMod
          theme={theme}
          type="text"
          placeholder="search"
          className="pt-2 px-3 w-100"
        />
        <ImgMod src="/searchIcons.png" />
      </div>
      <AgentCallSettingContainer className=" gap-5">
        {agentCallSetting.map((agent) => (
          <AgentCallSetting key={agent.id} agent={agent} />
        ))}
      </AgentCallSettingContainer>
    </AgentRowContainer>
  );
}

export default AgentRow;
