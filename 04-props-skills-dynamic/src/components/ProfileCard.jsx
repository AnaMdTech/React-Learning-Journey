import Avatar from "./Avatar";
import Skills from "./Skills";

export default function ProfileCard({ name, skills, role }) {
  return (
    <div className="profile-card">
      <Avatar />
      <h2>{name}</h2>
      <p>{role}</p>
      <Skills skills={skills} />
    </div>
  );
}
