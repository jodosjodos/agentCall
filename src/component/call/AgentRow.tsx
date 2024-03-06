import React from "react";
import styled from "styled-components";
import { agentCallSetting } from "../../data/agents";
import { AgentCallSetting } from "./AgentCallSetting";
const AgentRowContainer = styled.div`
  padding: 24px 26px;
  background-color: #040f12;
  height: calc(100vh - 100px);
  overflow: scroll;

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
const InputMod = styled.input`
  float: right;
  padding: 6px 6px;
  border: none;
  margin-top: 8px;
  font-size: 17px;
  background-color: #0a2328;
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
  return (
    <AgentRowContainer className="d-flex flex-column gap-5 ">
      <div className="position-relative  w-100">
        <InputMod
          type="text"
          placeholder="search"
          className="pt-2 px-3 w-100"
        />
        <ImgMod src="/searchIcons.png" />
      </div>
      <AgentCallSettingContainer className=" gap-5">
        {agentCallSetting.map((agent) => (
          <AgentCallSetting agent={agent} />
        ))}
      </AgentCallSettingContainer>
    </AgentRowContainer>
  );
}

export default AgentRow;
