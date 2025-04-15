import { useState, useRef } from "react";

export default function App() {
  // Controlled input state
  const [controlledName, setControlledName] = useState("");

  // Uncontrolled input ref
  const uncontrolledRef = useRef();

  // Submit handlers
  const handleControlledSubmit = (e) => {
    e.preventDefault();
    alert(`Controlled Input: ${controlledName}`);
    setControlledName("");
  };

  const handleUncontrolledSubmit = (e) => {
    e.preventDefault();
    alert(`Uncontrolled Input: ${uncontrolledRef.current.value}`);
    uncontrolledRef.current.value = "";
  };

  return (
    <div className="container">
      <h1>Controlled vs Uncontrolled Inputs</h1>

      {/* Controlled Input */}
      <form onSubmit={handleControlledSubmit} className="form">
        <h2>Controlled Input</h2>
        <input
          type="text"
          placeholder="Your name"
          value={controlledName}
          onChange={(e) => setControlledName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {/* Uncontrolled Input */}
      <form onSubmit={handleUncontrolledSubmit} className="form">
        <h2>Uncontrolled Input</h2>
        <input type="text" placeholder="Your name" ref={uncontrolledRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
