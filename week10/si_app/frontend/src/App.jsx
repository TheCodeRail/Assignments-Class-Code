import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState(0);
  const [result, setResult] = useState(0);
  async function handleSI() {
    console.log(principal, rate, time);
    const response = await axios.post("http://localhost:4000/si", {
      principal: principal,
      rate: rate,
      time: time,
    });
    console.log(response.data.si);
    setResult(response.data.si);
  }
  return (
    <>
      <h2>S.I FullStack Application</h2>
      <input
        type="number"
        placeholder="enter principal value"
        onChange={(e) => setPrincipal(e.target.value)}
      />
      <input
        type="number"
        placeholder="enter rate"
        onChange={(e) => setRate(e.target.value)}
      />
      <input
        type="number"
        placeholder="enter time"
        onChange={(e) => setTime(e.target.value)}
      />
      <button onClick={handleSI}>Calculate SI</button>
      <br></br>
      <h3>Your S.I Calculated is : {result}</h3>
    </>
  );
};

export default App;
