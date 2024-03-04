// import React, { useState } from "react";

<<<<<<< HEAD
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
=======
function CustomInput({ value, label,name }: { value: string; label: string,name:string }) {
  // const [selected, setSelected] = useState(false);
>>>>>>> 27b2d1ecff60481ffd45d526d50805dc631b0692
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
