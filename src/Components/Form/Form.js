import React, { useState } from 'react';
import "./form.scss"

const Form = () => {
    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        dateOfStart: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
        department: ""
      });

      function handleChange(e) {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
      }

      const handleCheckSubmit = (e) => {
        e.preventDefault()
        console.log(employee)   
    }

    return (
        <form onSubmit={(e) => handleCheckSubmit(e)}>
            <label htmlFor="first-name">First Name</label>
            <input type="text" value={employee.firstName} name='firstName' id="first-name" onChange={(e) => handleChange(e)}/>
            <label htmlFor="last-name">Last Name</label>
            <input type="text" value={employee.lastName} name='lastName' id="last-name" onChange={(e) => handleChange(e)}/>
            <label htmlFor="date-of-birth">Date of Birth</label>
            <input type="text" value={employee.dateOfBirth} name='dateOfBirth' id="date-of-birth" onChange={(e) => handleChange(e)}/>
            <label htmlFor="start-date">Start Date</label>
            <input type="text" value={employee.dateOfStart} name='dateOfStart' id="start-date" onChange={(e) => handleChange(e)}/>
            <div className='adressContainer'>
                <p>Adress</p>
            <label htmlFor="street">Street</label>
            <input type="text" value={employee.street} name='street' id="street" onChange={(e) => handleChange(e)}/>
            <label htmlFor="city">City</label>
            <input type="text" value={employee.city} name='city' id="city" onChange={(e) => handleChange(e)}/>
            <label htmlFor="state">State</label>
            <input type="text" value={employee.state} name='state' id="state" onChange={(e) => handleChange(e)}/>
            <label htmlFor="zip-code">Zip Code</label>
            <input type="text" value={employee.zipCode} name='zipCode' id="zip-code" onChange={(e) => handleChange(e)}/>
            </div>
            <label htmlFor="department">Department</label>
            <input type="text" value={employee.department} name='department' id="department" onChange={(e) => handleChange(e)}/>
            <button className="saveBtn">Save</button> 
        </form>
    );
};

export default Form;