import { useState } from "react";
import "./index.css";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLoginLogout() {
    setIsLoggedIn((prev) => !prev);
  }

  return (
    <div className="container">
      <h1>Welcome to My Site</h1>

      {isLoggedIn ? (
        <>
          <p className="message">Hello, Ana Mohammed 👋</p>
          <button onClick={handleLoginLogout} className="btn logout">
            Logout
          </button>
        </>
      ) : (
        <>
          <p className="message">Please login to continue.</p>
          <button onClick={handleLoginLogout} className="btn login">
            Login
          </button>
        </>
      )}
    </div>
  );
}
