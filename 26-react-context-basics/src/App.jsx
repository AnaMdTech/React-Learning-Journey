import React from "react";
import { UserProvider } from "./context/UserProvider";
import Profile from "./components/Profile";
import User from "./components/User";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <h1>React Context Basics</h1>
        <Profile />
        <User />
      </div>
    </UserProvider>
  );
}

export default App;
