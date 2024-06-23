import React, { useState, useEffect } from "react";

const FunctComp = () => {
  const [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1);
  }

  //   useEffect(function () {
  //     console.log("running for the 1st time");
  //   }, []);
  return (
    <>
      {count}
      <br></br>
      <button onClick={increase}>Increase</button>
    </>
  );
};

export default FunctComp;
