// src/components/CounterDisplay.jsx
import { useCounter } from "../context/CounterContext";

export default function CounterDisplay() {
  const { count } = useCounter();

  return <h2 style={{ marginBottom: "1rem" }}>Current Count: {count}</h2>;
}
