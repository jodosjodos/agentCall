import React from "react";
import { Header } from "../component/agents/Header";
import TopBar from "../component/TopBar";
import styled from "styled-components";
import AgentRow from "../component/call/AgentRow";
const ImportContactContainer = styled.div`
  height: 100vh;
`;
const PageContainer = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: space-between;
  @media (max-width: 625px) {
    flex-direction: column;
  }
`;

function ImportContact({ isSidebarOpened }: { isSidebarOpened: boolean }) {
  return (
    <ImportContactContainer>
      <Header hideSearch={true}></Header>
      <PageContainer>
        {isSidebarOpened && <AgentRow></AgentRow>}
        <div className="flex-grow-1">
          <TopBar></TopBar>
        </div>
      </PageContainer>
    </ImportContactContainer>
  );
}

export default ImportContact;
