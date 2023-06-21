import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { setEmployeeFormData } from "../../../Feature/employeeForm.slice";
import { Formater } from "../../../Utils/formatData";

const InputDatePicker = ({ dateEl }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.EmployeeForm);

  const [date, setDate] = useState();

  const handleChange = (event) => {
    const { name, value } = event;
    setDate(value);
    const newDate = Formater.formatDate(value);
    const formData = {
      [name]: newDate,
    };
    dispatch(setEmployeeFormData(formData));
  };

  return (
    <div>
      <label htmlFor={dateEl.id}>{dateEl.labelName}</label>
      <br />
      <DatePicker
        selected={date}
        value={data[dateEl.id]}
        onChange={(e) => handleChange({ name: dateEl.id, value: e })}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        id={dateEl.id}
      />
    </div>
  );
};

export default InputDatePicker;
