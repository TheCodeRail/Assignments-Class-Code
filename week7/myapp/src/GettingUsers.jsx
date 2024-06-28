import React, { useState } from "react";
import axios from "axios";

const GettingUsers = () => {
  const [login, setLogin] = useState(false);
  const [users, setUsers] = useState(null);
  async function showUsers() {
    if (!login) {
      return alert("Please Login!");
    }
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(res.data);
  }
  function handleLogin() {
    setLogin(true);
  }
  function handleLogout() {
    setLogin(false);
  }
  return (
    <>
      {login ? (
        <>
          <h1>Welcome To your dashboard</h1>
          <button onClick={handleLogout}>Logout</button>
          <br></br>
          <button onClick={showUsers}>Show Users</button>
          {users ? (
            <>
              <h2>Users are:</h2>
              {users.map((user) => (
                <>
                  <div
                    key={user.id}
                    style={{
                      border: "2px solid black",
                      margin: "10px",
                      padding: "5px",
                    }}
                  >
                    <h3>{user.name}</h3>
                    <h4>{user.email}</h4>
                  </div>
                </>
              ))}
            </>
          ) : (
            <h1>There are no users data</h1>
          )}
        </>
      ) : (
        <>
          <h1>Please Login!</h1>
          <button onClick={handleLogin}>Login</button>
          <br></br>
          <button onClick={showUsers}>Show Users</button>
        </>
      )}
    </>
  );
};

export default GettingUsers;
