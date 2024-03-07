import Dropdown from "react-bootstrap/Dropdown";
import styled from "styled-components";

const DropMod = styled(Dropdown.Toggle)`
  background-color: #0f2e35;
  border: none;
  width: 100%;
  border-radius: 8px;
  color: #96adb3;
  height: 40px;
  font-size: 14px;
  font-weight:bold;
  &:hover {
    background-color: #00b7df;
    color: black;
  }
  &:active {
    background-color: #00b7df;
    color: black;
  }
`;

const DropMenu = styled(Dropdown.Menu)`
  background-color: #0f2e35;
`;
const DropItem = styled(Dropdown.Item)`
  color: #96adb3;
`;
const DropDownContainer = styled.div`
  width: 235px;
  flex-grow: 1;
`;
export function DropdownButton({ name }: { name: string }) {
  return (
    <DropDownContainer>
      <Dropdown className="">
        <DropMod className="px-3 " id="dropdown-basic">
          {name}
        </DropMod>

        <DropMenu>
          <DropItem href="#/action-1">Action</DropItem>
          <DropItem href="#/action-2">Another action</DropItem>
          <DropItem href="#/action-3">Something else</DropItem>
        </DropMenu>
      </Dropdown>
    </DropDownContainer>
  );
}
