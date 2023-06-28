import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formater } from "../../../Utils/formatData";
import { setEmployeeFormData } from "../../../Feature/employeeForm.slice";

const InputDatePicker = ({ dateEl }) => {
  const dispatch = useDispatch();
  const [viewDate, setViewDate] = useState("");
  const data = useSelector((state) => state.EmployeeForm);

  useEffect(() => {
    if (data[dateEl.id].length) {
      const viewDate = Formater.formatDateToCreate(data[dateEl.id]);
      setViewDate(viewDate);
    } else {
      setViewDate("");
    }
  }, [data]);

  const handleChange = (event) => {
    const { name, value } = event;
    const newDate = Formater.formatDate(value.target.value);
    const formData = {
      [name]: newDate,
    };
    dispatch(setEmployeeFormData(formData));
  };

  return (
    <div>
      <label htmlFor={dateEl.id}>{dateEl.labelName}</label>
      <br />
      <input
        type="date"
        onChange={(e) => handleChange({ name: dateEl.id, value: e })}
        id={dateEl.id}
        value={viewDate}
      ></input>
    </div>
  );
};

export default InputDatePicker;
