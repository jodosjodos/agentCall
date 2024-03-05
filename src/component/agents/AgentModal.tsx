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
with:10px;
`

function AgentModal({ agent }: { agent: AgentProfile }) {
  return (
    <div className="">
      <div className="d-flex flex-row">
        <div>
          <img src={agent.profile} alt="" />
          <div className="d-flex flex-row">
            <p>{agent.name}</p>
            <EditIcon src="/editProfile.png" alt="" className="w-auto" />
          </div>
        </div>
        <div>
          <p>{agent.time}</p>
          <p>Average call time</p>
          <div>
            <img src="/rateTime.png" alt="" />
            <p>min yesterday</p>
          </div>
        </div>
      </div>

      <div>
        <p>Minutes talked</p>
        <div>
          <img src="/clockIcon.png" alt="" />
          <p>{agent.minutesTalked}</p>
        </div>
      </div>
      <div>
        <p>Completed Leads</p>
        <p>{agent.completedLeads}</p>
      </div>
      <div>
        <p>Incoming calls</p>
        <p>{agent.IncomingCalls}</p>
      </div>
      <div>
        <p>Finished Calls</p>
        <p>{agent.FinishedCalls}</p>
      </div>
    </div>
  );
}

export default AgentModal;
