import { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    console.log("⏱️ Timer started");

    return () => {
      clearInterval(intervalId);
      console.log("🧹 Timer cleaned up");
    };
  }, []);

  return <h2>Time passed: {time} sec</h2>;
}

export default Timer;