import React from "react";
import axios from "axios";

const handlereq = () => {
  async function getUsers() {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <h1>Axios</h1>
      <button onClick={getUsers}>Get Users</button>
    </>
  );
};

export default handlereq;
