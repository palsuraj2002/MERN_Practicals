//useState Hooks Demo
import React, { useState } from "react";

const StateDemo = () => {
  const [count, setCount] = useState(0);
  const [a, setA] = useState(10);
  const [title, setTitle] = useState("hello");
  return (
    <div
      style={{
        backgroundColor: "turquoise",
        textAlign: "center",
        padding: "10px",
      }}//inline css 
    >
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <h4>{a}</h4>
      <button onClick={() => setA(a + 1)}>Add</button>

      <h3>{title}</h3>
      <button onClick={() => setTitle("Welcome :)")}>Login</button>
    </div>
  );
};

export default StateDemo;
