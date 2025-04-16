import { useState } from "react";
import { useDocumentTitle } from "./hooks/useDocumentTitle";

function App() {
  const [count, setCount] = useState(0);

  // Use our custom hook
  useDocumentTitle(`Count: ${count}`);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Custom Hook: useDocumentTitle</h1>
      <p>Check the tab title 🔍</p>
      <button onClick={() => setCount((c) => c + 1)}>Count is {count}</button>
    </div>
  );
}

export default App;
