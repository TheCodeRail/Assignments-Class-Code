import React, { useRef } from "react";

const UndertandRef = () => {
  const inputref = useRef(null);
  function changeDom() {
    inputref.current.textContent = "Understook the hooks";
  }
  return (
    <>
      <h3 ref={inputref}>Understanding the useref hook</h3>
      <button onClick={changeDom}>Change Text</button>
    </>
  );
};

export default UndertandRef;
