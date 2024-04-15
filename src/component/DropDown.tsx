import Dropdown from "react-bootstrap/Dropdown";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const DropMod = styled.select <{ theme: string,color?:string[] }>`
  background-color: ${(props) =>
    props.theme === "light" ? props.color?props.color[0]:"#C9D5D8" :  props.color?props.color[1]:"#0f2e35"};
  border: ${(props) =>
    props.theme === "light" ? "1px solid #0F2E35" : "none"};
  width: 100%;
  border-radius: 8px;
  color: ${(props) => (props.theme === "light" ? "#0F2E35" : "#96adb3")};

  height: 42px;
  font-size: 14px;
  font-weight: bold;
  &:hover {
    background-color: ${(props) =>
    props.theme === "light" ? "#FEFEFE" : "#00b7df"};
    color: black;
  }
  &:active {
    background-color: ${(props) =>
    props.theme === "light" ? "#FEFEFE" : "#00b7df"};
    color: black;
  }
`;

const DropMenu = styled.option <{ theme: string }>`
  background-color: ${(props) =>
    props.theme === "light" ? "#FEFEFE" : "#0f2e35"};
  color: black;
`;

const DropDownContainer = styled.div`
  width: 235px;
  flex-grow: 1;
`;
export function DropdownButton({ options, placeholder,color }:
  {
    placeholder?: string;
    onSelect: (val: string) => void;
    color?:string[]
    options: string[]
  }) {

  const theme = useSelector((state: RootState) => state.theme.theme);


  return (
    <DropDownContainer>
      <Dropdown className="">
        <DropMod color={color} theme={theme} defaultValue="">
          <option value="" disabled>
            {placeholder || 'Select an option'}
          </option>
          {options.map((item, index) => (
            <DropMenu theme={theme} key={index} value={item}>
              {item}
              {item}
            </DropMenu>
          ))}
        </DropMod>
      </Dropdown>
    </DropDownContainer>
  );
}
