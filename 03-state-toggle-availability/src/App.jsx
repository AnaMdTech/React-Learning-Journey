import { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import "./index.css";

export default function App() {
  const [available, setAvailable] = useState(true);

  function toggleAvailability() {
    setAvailable((prev) => !prev);
  }

  return (
    <div className="app">
      <ProfileCard isAvailable={available} toggle={toggleAvailability} />
    </div>
  );
}
