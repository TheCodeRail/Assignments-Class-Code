import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Child1 = () => {
  const { count, setCount } = useContext(CounterContext);
  return (
    <>
      <h2>This is child one - {count}</h2>
    </>
  );
};

export default Child1;
