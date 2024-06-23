import React, { useState } from "react";

const App = () => {
  const [otp, setOtp] = useState("");
  const [input, setInput] = useState("");
  function generate() {
    const value = Math.random() * 10000;
    const newval = value.toFixed(0);
    sessionStorage.setItem("otp", newval);
    setOtp(newval);
  }

  function verify() {
    const value = sessionStorage.getItem("otp");
    if (value === input) {
      alert("otp is correct");
    } else {
      alert("otp is incorrect");
    }
  }
  return (
    <>
      <h1>Otp Validation </h1>
      <input
        type="number"
        placeholder="enter otp"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={generate}>Generate Otp</button>
      <button onClick={verify}>Verify</button>
      <br></br>
      <p>Your Otp is: {otp}</p>
    </>
  );
};

export default App;
