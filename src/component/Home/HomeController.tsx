import styled from "styled-components";
import { DropdownHome } from "./DropDownHome";

const ParentButton = styled.div`
  background-color: #0b2227;
  height: fit-content;
  width: fit-content;
  flex-wrap: wrap;
  border-radius: 20px;
  @media (max-width: 600px) {
    width: 100%;
  }
  padding: 0.5rem;
`;

const NotificationIcon = styled.img`
  background-color: #0f2e35;
  border-radius: 20px;

`;
const ControllerContainer = styled.div<{ $selected?: boolean }>`
  display: ${(props) => (props.$selected ? "none" : "block")};
  @media (min-width: 1500px) {
    flex-direction: row !important;
  }
`;
export function HomeController() {
  return (
    <ControllerContainer
      $selected
      className="d-flex  gap-2 flex-row flex-wrap py-4 px-4 "
    >
      <ParentButton className="d-flex  gap-2">
        <DropdownHome name="Date" />
        <DropdownHome name="Week" />
        <DropdownHome name="Month" />
        <DropdownHome name="Custom" />
      </ParentButton>
      <NotificationIcon src="/HomeIcon.png" />
    </ControllerContainer>
  );
}
