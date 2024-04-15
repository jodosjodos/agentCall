import styled from "styled-components";
import { HeaderHome, SectionHome } from "../component/Home";
import AgentRow from "../component/call/AgentRow";
const HomeContainer = styled.div`
  height: 100vh;
  width: 100%;
`;
const PageContainer = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: space-between;
  @media (max-width: 625px) {
    flex-direction: column;
  }
`;


export const HomePage = ({isSidebarOpened}:{isSidebarOpened:boolean}) => {
  return (
    <HomeContainer>
      <HeaderHome />
      <PageContainer>
     {isSidebarOpened&&<AgentRow></AgentRow>}
      <SectionHome />
      </PageContainer>
      
    </HomeContainer>
  );
};
