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
import { useSelector } from "react-redux";
import InputOptions from "./inputOptions/InputOptions";

const Form = () => {
  const formData = useSelector((state) => state.EmployeeForm);
  const handleCheckSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
            <InputOptions data={states} name={"State"} />
            <InputText input={inputList.zipCode} />
          </fieldset>
        </div>
        <InputOptions data={department} name={"Department"} />
        <button className="saveBtn">Save</button>
      </form>
    </div>
  );
};

export default Form;
