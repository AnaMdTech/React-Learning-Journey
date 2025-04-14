import ProfileCard from "./components/ProfileCard";
import "./index.css";

export default function App() {
  return (
    <div className="app">
      <ProfileCard
        name="Ana Mohammed"
        title="Frontend Developer"
        bio="I am a software engineer with a passion for building scalable and efficient systems."
      />
    </div>
  );
}
