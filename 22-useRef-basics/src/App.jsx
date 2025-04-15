import { useRef, useState } from "react";

export default function App() {
  const inputRef = useRef();
  const [message, setMessage] = useState("");

  const focusInput = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "#e6f7ff";
    setMessage("Input focused with useRef!");
  };

  const clearInput = () => {
    inputRef.current.value = "";
    inputRef.current.focus();
    setMessage("Input cleared and refocused.");
  };

  return (
    <div className="container">
      <h1>useRef Basics</h1>
      <input type="text" placeholder="Type something..." ref={inputRef} />
      <div className="buttons">
        <button onClick={focusInput}>Focus Input</button>
        <button onClick={clearInput}>Clear Input</button>
      </div>
      {message && <p className="message">{message}</p>}
    </div>
  );
}
