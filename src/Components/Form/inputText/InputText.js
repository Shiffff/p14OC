import React from "react";
import { useDispatch } from "react-redux";
import { setEmployeeFormData } from "../../../Feature/employeeForm.slice";

const InputText = ({ input }) => {
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
      <label htmlFor={input.id}>{input.labelName}</label>
      <br />
      <input
        type={input.type}
        name={input.id}
        id={input.id}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputText;
