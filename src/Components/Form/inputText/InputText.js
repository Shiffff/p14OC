import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setEmployeeFormData } from "../../../Feature/employeeForm.slice";
import { Formater } from "../../../Utils/formatData";

const InputText = ({ input }) => {
  const dispatch = useDispatch();
  const [isValid, setIsValid] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const regexpResult = Formater.inputRegexp(value, input.id);
    setIsValid(regexpResult);
    if (regexpResult) {
      const formData = {
        [name]: value,
      };
      dispatch(setEmployeeFormData(formData));
    } else {
      const formData = {
        [name]: "",
      };
      dispatch(setEmployeeFormData(formData));
    }
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
        min={input.type === "number" ? 0 : undefined}
      />
      {isValid === false && (
        <p className="inputErrMsg">Veuillez entrer un caractère valide</p>
      )}
    </div>
  );
};

export default InputText;
