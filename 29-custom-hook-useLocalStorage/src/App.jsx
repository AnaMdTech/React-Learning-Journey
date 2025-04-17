import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [name, setName] = useLocalStorage("name", "");

  return (
    <div className="container">
      <h1>🧠 useLocalStorage Hook</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>
        Hello, <strong>{name || "stranger"}</strong>!
      </p>
    </div>
  );
}

export default App;
