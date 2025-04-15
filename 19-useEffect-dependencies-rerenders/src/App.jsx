import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    console.log("🎯 useEffect ran due to count changing!");
  }, [count]);

  useEffect(() => {
    console.log("⌨️ keyword changed:", keyword);
  }, [keyword]);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>useEffect Dependencies & Re-Renders</h2>

      <div style={{ marginBottom: "1rem" }}>
        <h3>Count: {count}</h3>
        <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
      </div>

      <div>
        <input
          type="text"
          placeholder="Type to trigger re-renders"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
