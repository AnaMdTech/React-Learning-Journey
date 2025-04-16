import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function User() {
  const { user, setUser } = useContext(UserContext); // Access and update user

  const updateUser = () => {
    setUser({ ...user, name: "Jane Doe" });
  };

  return (
    <div>
      <h2>Current User: {user.name}</h2>
      <button onClick={updateUser}>Change Name</button>
    </div>
  );
}

export default User;
