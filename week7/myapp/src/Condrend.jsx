import React, { useState } from "react";

const Condrend = () => {
  const [islogin, setLogin] = useState(false);
  function handleLogin() {
    setLogin(true);
  }
  function handleLogout() {
    setLogin(false);
  }
  return (
    <>
      {islogin ? (
        <>
          <h1>Welcome to your dashboard</h1>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <h1>Please Login</h1>
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </>
  );
};

export default Condrend;
