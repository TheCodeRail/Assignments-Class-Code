import React from "react";

const RenderLists = () => {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];
  //   const numbers = [1, 2, 3, 4];
  return (
    <>
      <h1>Rendering Lists</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default RenderLists;
