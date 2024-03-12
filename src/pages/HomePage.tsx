import styled from "styled-components";
import { HeaderHome, SectionHome } from "../component/Home";
const HomeContainer = styled.div`
  height: 100vh;
  width: 100%;
`;


export const HomePage = ({isSidebarOpened}:{isSidebarOpened:boolean}) => {
  return (
    <HomeContainer>
      <HeaderHome />
      
      <SectionHome />
    </HomeContainer>
  );
};
