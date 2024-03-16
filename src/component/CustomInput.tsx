import React, { ReactNode, useState } from "react";
import { RootState } from "../store";
import { useSelector } from "react-redux";
// customer input field
function CustomInput({
  value,
  label,
  name,
  active,
  children,
}: {
  value: string;
  label: string;
  name: string;
  active: string;
  children?: ReactNode;
}) {
  const [selected, setSelected] = useState(active);
  console.log(selected);
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <div
      onClick={() => setSelected(value)}
      className={`d-flex gap-2  custom_radio ${theme == "light" && "custom_radio_light"}   ${
        children ? "align-items-start py-2" : "align-items-center"
      } `}
    >
      <input type="radio" name={name} id={value}></input>
      <div>
        <label htmlFor={value}>{children ? children : label}</label>
      </div>
    </div>
  );
}

export default CustomInput;
