import React, { useRef, useState } from "react";

const Understanding2 = () => {
  const countRef = useRef(0);
  const [stateCount, setStateCount] = useState(0);
  const incrementRefCount = () => {
    countRef.current += 1;
  };

  const incrementStateCount = () => {
    setStateCount(stateCount + 1);
  };
  console.log("rerender");
  return (
    <>
      <div>
        <p>Ref Count: {countRef.current}</p>
        <p>State Count: {stateCount}</p>
        <button onClick={incrementRefCount}>Increment Ref Count</button>
        <button onClick={incrementStateCount}>Increment State Count</button>
      </div>
    </>
  );
};

export default Understanding2;
