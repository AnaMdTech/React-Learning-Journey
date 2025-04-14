import { useEffect, useState } from "react";
import "./index.css";

export default function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Track window resize
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency → runs only on mount/unmount

  // Track online/offline status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []); // Runs once on mount

  return (
    <div className="container">
      <h1>🧠 useEffect Basics</h1>
      <p>
        📏 Current Window Width: <strong>{width}px</strong>
      </p>
      <p>
        🌐 Network Status:{" "}
        <strong>{isOnline ? "Online ✅" : "Offline ❌"}</strong>
      </p>
    </div>
  );
}
