import React, { useState, useCallback } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  const inc = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  function changeFlag() {
    setFlag(!flag);
  }
  console.log("parent rerender");
  return (
    <>
      <h2>Parent Component Count- {count}</h2>
      <button onClick={inc}>Increase</button>
      <button onClick={changeFlag}>Change flag</button>
      <Child inc={inc} />
    </>
  );
};

export default Parent;
