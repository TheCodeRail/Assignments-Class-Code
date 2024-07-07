import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Child2 = () => {
  const { count, setCount } = useContext(CounterContext);
  function inc() {
    setCount(count + 1);
  }
  return (
    <>
      <h2>This is child two - {count}</h2>
      <button onClick={inc}>Inc from child two</button>
    </>
  );
};

export default Child2;
