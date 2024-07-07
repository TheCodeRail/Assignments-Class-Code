import React, { useContext } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import { CounterContext } from "../context/CounterContext";

const Parent = () => {
  const { count, setCount } = useContext(CounterContext);
  function inc() {
    setCount(count + 1);
  }
  return (
    <>
      <h2>{count}</h2>
      <button onClick={inc}>Inc</button>
      <Child1 />
      <Child2 />
    </>
  );
};

export default Parent;
