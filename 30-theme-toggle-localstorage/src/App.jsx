// src/App.jsx
import { useEffect, useState } from "react";

function App() {
  // 1️⃣ Read from localStorage on initial render
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // 2️⃣ Update body class and localStorage on theme change
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // 3️⃣ Toggle handler
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="app">
      <h1>{theme === "light" ? "🌞 Light Mode" : "🌙 Dark Mode"}</h1>
      <button onClick={toggleTheme} className="toggle-btn">
        Toggle Theme
      </button>
    </div>
  );
}

export default App;
