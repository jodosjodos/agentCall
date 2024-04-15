import React, { ReactNode } from "react";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import { FormCheck } from "react-bootstrap";
import styled from "styled-components";

const CustomCheckBox = styled.div<{$selected?: boolean; $theme?: string}>`
  padding: 8px 15px;
  border-radius: 8px;
  background-color: ${(props) =>
    props.$theme === "light" ? "#E5ECEE !important" : "#051316 !important"};
  color: ${(props) => (props.$theme === "light" ? "#0A2328" : "inherit")};
  border: ${(props) => (props.$selected ? "0.5px solid #00B7DF" : "none")};
`;

function CustomInput({
  value,
  label,
  name,
  active,
  selected,
  setSelected,
  children,
  type
}: {
  value: string;
  label: string;
  name: string;
  active?: string;
  type?:string;
  selected: string;
  setSelected: any;
  
  children?: ReactNode;
}) {
 
  const theme = useSelector((state: RootState) => state.theme.theme);

  const handleSelection = () => {
   
    setSelected((prevSelected: string) => prevSelected==value?active:value);
  };

  return (
    <CustomCheckBox
    $theme={theme}
      $selected={selected==value}
      onClick={handleSelection}
      className={`d-flex gap-2 ${
        children ? "align-items-start py-3" : "align-items-center"
      }`}
    >
      <FormCheck
        type={type=="checkbox"?"checkbox":"radio"}
        name={name}
        onClick={handleSelection}
        id={name}
        checked={selected==value}
        onChange={handleSelection}
      />
      <div>
        <label htmlFor={value}>{children ? children : label}</label>
      </div>
    </CustomCheckBox>
  );
}

export default CustomInput;
