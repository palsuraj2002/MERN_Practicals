import React, { useState } from "react";

const Array_useState = () => {
  const [emp, setEmp] = useState({ name: "", designation: "" }); //Object
  const [emps, setEmps] = useState([]); //Array

  const addEmployee = () => {
    setEmps([...emps, emp]);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setEmp({ ...emp, name: e.target.value })}
        style={{
          padding: "10px",
          borderRadius: "10px",
        }}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Designation"
        onChange={(e) => setEmp({ ...emp, designation: e.target.value })}
        style={{
          padding: "10px",
          borderRadius: "10px",
        }}
      />
      <br />
      <br />
      <button
        onClick={addEmployee}
        style={{
          border: "none",
          borderRadius: "10px",
          padding: "15px",
          backgroundColor: "tomato",
        }}
      >
        Add Employee
      </button>
      <ul>
        {emps.map(
          (
            //list mapping
            employee,
            index
          ) => (
            <li key={index}>
              {employee.name} - {employee.designation}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Array_useState;
