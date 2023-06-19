import React from "react";

const InputOptions = ({ data, name, onSelect }) => {
  const handleChange = (event) => {
    onSelect(event);
  };

  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <br />
      <select name={name} id={name} onChange={(e) => handleChange(e)}>
        {data.map((el, index) => {
          return <option key={index}>{el}</option>;
        })}
      </select>
    </div>
  );
};

export default InputOptions;
