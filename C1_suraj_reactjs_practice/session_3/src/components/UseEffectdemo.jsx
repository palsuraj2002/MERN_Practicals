import React, { useEffect, useState } from "react";

const UseEffectdemo = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `count ${count}`;
  }, []); //Mount

    // useEffect(() => {
    //   document.title = `count ${count}`;
    // }, [count]); //Update
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default UseEffectdemo;
