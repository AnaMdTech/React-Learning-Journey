// src/components/ThemeToggle.jsx
import useTheme from "../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}
