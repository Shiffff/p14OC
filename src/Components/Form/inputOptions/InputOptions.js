import React, { useState } from "react";

const InputOptions = ({ data, name, onSelect, defaultValue }) => {
  const handleChange = (event) => {
    onSelect(event);
  };

  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <br />
      <select
        name={name}
        value={defaultValue !== null ? defaultValue : ""}
        id={name}
        onChange={(e) => handleChange(e)}
      >
        {data.map((el, index) => {
          return <option key={index}>{el}</option>;
        })}
      </select>
    </div>
  );
};

export default InputOptions;
