import { useState } from "react";
import StepSelector from "./components/StepSelector";
import CounterDisplay from "./components/CounterDisplay";
import "./index.css";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((prev) => prev + step);
  const handleDecrement = () => setCount((prev) => prev - step);

  return (
    <div className="app">
      <h1>Lifting State Up</h1>
      <StepSelector step={step} setStep={setStep} />
      <CounterDisplay
        count={count}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
}
