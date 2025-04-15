import { useRef, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(1);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  renderCount.current++;

  return (
    <div className="container">
      <h1>useRef to Persist Values</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <p>
        This component rendered <strong>{renderCount.current}</strong> times.
      </p>
    </div>
  );
}
