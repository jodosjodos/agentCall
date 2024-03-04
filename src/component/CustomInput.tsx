import React, { useState } from "react";

function CustomInput({
  value,
  label,
  name,
  active,
}: {
  value: string;
  label: string;
  name: string;
  active: string;
}) {
  const [selected, setSelected] = useState(active);
  console.log(selected)
  return (
    <div
      onClick={() => setSelected(value)}
      className={`d-flex gap-2  custom_radio align-items-center `}
    >
      <input type="radio" name={name} id={value}></input>
      <div>
        <label htmlFor={value}>{label}</label>
      </div>
    </div>
  );
}

export default CustomInput;
