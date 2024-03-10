import styled from "styled-components";
import { homeData } from "../../data/Home";
import { SectionModal } from "./SectionModal";
const GridContainer = styled.div<{ $selected?: boolean }>`
  display: grid;
  flex-grow: 1;

  grid-template-columns:  repeat(2, 1fr);

  }
`;
export function SectionHome() {
  return (
    <GridContainer className="gap-5  px-4 py-4">
      {homeData.map((home) => (
        <SectionModal home={home} key={home.id} />
      ))}
    </GridContainer>
  );
}
