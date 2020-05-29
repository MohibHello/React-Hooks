import React from "react";
import useInput from "./useInput";

function Input(props) {

// rename the value and handleChange  ES6 features
  const { value:name, handleChange:handleName } = useInput("");
  const { value:surname, handleChange:handleSurName } = useInput("");
  const { value:lastname, handleChange:handleLastName } = useInput("");

  return (
    <div>
      <input
        type={props.type}
        placeholder={props.placeholder}
        onChange={handleName}
        value={name}
      />
     <input
        type={props.type}
        placeholder={props.placeholder}
        onChange={handleSurName}
        value={surname}
      />
      <input
        type={props.type}
        placeholder={props.placeholder}
        onChange={handleLastName}
        value={lastname}
      />
    </div>
  );
}

export default Input;
