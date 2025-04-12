import React, { useState } from "react";

const Object_useState = () => {
  const [emp, setEmp] = useState({ name: "", sal: "" }); //Object

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
      &nbsp; &nbsp;
      <input
        type="text"
        placeholder="Salary"
        onChange={(e) => setEmp({ ...emp, sal: e.target.value })}
        style={{
          padding: "10px",
          borderRadius: "10px",
        }}
      />
      <h1>
        {emp.name} - {emp.sal}
      </h1>
    </div>
  );
};

export default Object_useState;
