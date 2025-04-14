import ProfileCard from "./components/ProfileCard";
import "./index.css";

export default function App() {
  let available = false;
  let status_text = "";
  {available ? status_text = "🚀 Open to Collaborate" : status_text = "❌ Currently unavailable"}
  return (
    <div className="app">
      <ProfileCard
        name="Ana Mohammed"
        role="Frontend Developer"
        available={available}
        status={status_text}
      />
    </div>
  );
}
