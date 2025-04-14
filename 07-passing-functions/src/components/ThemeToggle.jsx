export default function ThemeToggle({ toggleTheme }) {
  return (
    <button onClick={toggleTheme} className="toggle-btn">
      Toggle Theme
    </button>
  );
}
