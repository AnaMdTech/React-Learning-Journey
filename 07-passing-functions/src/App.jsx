import { useState } from "react";
import ThemeToggle from "./components/ThemeToggle";
import "./index.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <h1>Theme Toggle</h1>
      <ThemeToggle toggleTheme={() => setDarkMode(!darkMode)} />
    </div>
  );
}
