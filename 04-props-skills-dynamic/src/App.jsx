import ProfileCard from "./components/ProfileCard";
import "./index.css";

const skills = ["React", "Tailwind", "JavaScript", "Figma", "Git"];

export default function App() {
  return (
    <div className="app">
      <ProfileCard name="Ana Mohammed" role={"Frontend Developer"} skills={skills} />
    </div>
  );
}
