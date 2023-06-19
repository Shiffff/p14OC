import React, { useState } from "react";
import "./form.scss";
import "react-datepicker/dist/react-datepicker.css";
import InputText from "./inputText/InputText";
import InputDatePicker from "./inputDatePicker/InputDatePicker";
import {
  inputList,
  inputDatePickerList,
  states,
  department,
} from "../../Utils/Data";
import { useDispatch, useSelector } from "react-redux";
import InputOptions from "./inputOptions/InputOptions";
import { setEmployeeFormData } from "../../Feature/employeeForm.slice";
import { setShowModal } from "../../Feature/modalToggle.slice";
import { setEmployeeListData } from "../../Feature/employeeList.slice";

const Form = () => {
  const dispatch = useDispatch();
  const [allValue, setAllValue] = useState(null);
  const formData = useSelector((state) => state.EmployeeForm);

  const handleCheckSubmit = (e) => {
    e.preventDefault();
    const values = Object.values(formData);
    const allValuesNotNull = values.every(
      (value) => value !== null && value.length !== 0
    );
    if (allValuesNotNull) {
      setAllValue(true);
      dispatch(setEmployeeListData(formData));
      dispatch(setShowModal(true));
    } else {
      setAllValue(false);
    }
  };

  const inputOptionsChange = (event) => {
    const { name, value } = event.target;
    const formData = {
      [name]: value,
    };
    dispatch(setEmployeeFormData(formData));
  };

  return (
    <div className="formContainer">
      <form onSubmit={(e) => handleCheckSubmit(e)}>
        <InputText input={inputList.firstName} />
        <InputText input={inputList.lastName} />
        <InputDatePicker dateEl={inputDatePickerList.dateOfBirth} />
        <InputDatePicker dateEl={inputDatePickerList.dateOfStart} />
        <div className="adressContainer">
          <fieldset className="address">
            <legend>Adress</legend>
            <InputText input={inputList.street} />
            <InputText input={inputList.city} />
            <InputOptions
              data={states}
              name={"State"}
              onSelect={inputOptionsChange}
            />
            <InputText input={inputList.zipCode} />
          </fieldset>
        </div>
        <InputOptions
          data={department}
          name={"Department"}
          onSelect={inputOptionsChange}
        />
        {allValue === false && (
          <p className="errMsg">
            Certaines valeurs sont manquantes. Veuillez remplir tous les champs.
          </p>
        )}
        <button className="saveBtn">Save</button>
      </form>
    </div>
  );
};

export default Form;
