// src/components/CounterControls.jsx
import { useCounter } from "../context/CounterContext";

export default function CounterControls() {
  const { setCount } = useCounter();

  return (
    <button onClick={() => setCount((prev) => prev + 1)}>
      Increment Count
    </button>
  );
}
