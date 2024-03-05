import { agents } from "../../data/agents";
import AgentModal from "./AgentModal";

export function AgentProfiles() {
  return (
    <div className="d-flex flex-row gap-5">
      {agents.map((agent) => (
        <AgentModal key={agent.id} agent={agent} />
      ))}
    </div>
  );
}
