import React, { useState } from "react";

function CustomInput({ value, label,name }: { value: string; label: string,name:string }) {
  const [selected, setSelected] = useState(false);
  return (
    <div className="d-flex gap-2 custom_radio align-items-center">
      <input type="radio" name={name} id={value}></input>
      <div>
        <label htmlFor={value}>{label}</label>
      </div>
    </div>
  );
}

export default CustomInput;
