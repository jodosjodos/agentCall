import Dropdown from "react-bootstrap/Dropdown";
import { useSelector } from "react-redux";

import styled from "styled-components";
import { RootState } from "../../store";


const DropMod = styled(Dropdown.Toggle)<{ $theme?: string }>`
  background-color: ${(props) =>
    props.$theme == "light" ? "#FEFEFE" : "#0f2e35"};
  border: none;
  border-radius: 20px;
  color: ${(props) => (props.$theme === "light" ? "#0F2E35" : "#96adb3")};
  height: 40px;
  font-size: 14px;
  &:hover {
    background-color: ${(props) =>
      props.$theme === "light" ? "#FEFEFE" : "#00b7df"};
    color: black;
  }
  &:active {
    background-color: ${(props) =>
      props.$theme === "light" ? "#FEFEFE" : "#00b7df"};
    color: black;
  }
`;

const DropMenu = styled(Dropdown.Menu)<{ $theme?: string }>`
  background-color: ${(props) =>
    props.$theme == "light" ? "##FEFEFE" : "#0f2e35"};
`;
const DropItem = styled(Dropdown.Item)<{ theme: string }>`
  color: ${(props) => (props.theme === "light" ? "black" : "#96adb3")};
`;
export function DropdownButton({ name }: { name: string }) {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <Dropdown className="">
      <DropMod $theme={theme} className="px-3" id="dropdown-basic">
        {name}
      </DropMod>

      <DropMenu $theme={theme}>
        <DropItem href="#/action-1">Action</DropItem>
        <DropItem href="#/action-2">Another action</DropItem>
        <DropItem href="#/action-3">Something else</DropItem>
      </DropMenu>
    </Dropdown>
  );
}
