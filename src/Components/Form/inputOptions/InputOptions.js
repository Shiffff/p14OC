import React from "react";
import { useDispatch } from "react-redux";
import { setEmployeeFormData } from "../../../Feature/employeeForm.slice";

const InputOptions = ({ data, name }) => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    const formData = {
      [name]: value,
    };
    dispatch(setEmployeeFormData(formData));
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
