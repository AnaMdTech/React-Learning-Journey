import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // Runs ONLY when count changes
  useEffect(() => {
    console.log("Count updated:", count);
    document.title = `Count: ${count}`;
  }, [count]);

  // Runs ONLY when name changes
  useEffect(() => {
    console.log("Name updated:", name);
  }, [name]);

  return (
    <div className="app">
      <h1>useEffect with Dependency</h1>
      <div>
        <button onClick={() => setCount((c) => c + 1)}>Increment</button>
        <p>Current count: {count}</p>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Your name is: {name}</p>
      </div>
    </div>
  );
}
