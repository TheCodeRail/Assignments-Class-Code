import React, { memo } from "react";

const Child = ({ inc }) => {
  console.log("child rendered");
  return (
    <>
      <button onClick={inc}>INC from the child</button>
    </>
  );
};

export default memo(Child);
