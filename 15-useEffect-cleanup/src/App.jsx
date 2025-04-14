import { useState } from "react";
import Timer from "./components/Timer";

export default function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="app">
      <h1>useEffect Cleanup</h1>
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "Hide" : "Show"} Timer
      </button>

      {show && <Timer />}
    </div>
  );
}


