import styled from "styled-components";
import { homeData } from "../../data/Home";
import { SectionModal } from "./SectionModal";
const GridContainer = styled.div<{ $selected?: boolean }>`
  display: grid;
  flex-grow: 1;
margin:0px;
   grid-template-columns:  repeat(2, 1fr);
  @media(max-width:300px){
    padding:5px 20px !important;
  }
 @media(max-width:1200px){
  grid-template-columns:  repeat(1, 1fr);
 
 }
  }
`;
// section
export function SectionHome() {
  return (
    <GridContainer className="gap-5 px-4 py-4">
      {homeData.map((home) => (
        <SectionModal home={home} key={home.id} />
      ))}
    </GridContainer>
  );
}
