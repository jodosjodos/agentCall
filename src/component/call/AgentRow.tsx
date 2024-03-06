import React from "react";
import styled from "styled-components";
const AgentRowContainer = styled.div`
  max-width: 356px;
  min-width: 300px;
  padding: 24px 26px;
  @media (max-width: 600px) {
    width: 100%;
    max-width: 100%;
  }
`;
function AgentRow() {
  return <AgentRowContainer>AgentRow</AgentRowContainer>;
}

export default AgentRow;
