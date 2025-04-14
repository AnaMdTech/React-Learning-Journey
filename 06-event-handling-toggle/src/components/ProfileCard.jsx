import { useState } from "react";
import Avatar from "./Avatar";

export default function ProfileCard({ name, title, bio }) {
  const [showBio, setShowBio] = useState(false);

  function toggleBio() {
    setShowBio(!showBio);
  }

  return (
    <div className="profile-card">
      <Avatar />
      <h2>{name}</h2>
      <p>{title}</p>
      <button className="toggle-btn" onClick={toggleBio}>
        {showBio ? "Hide Bio" : "Show Bio"}
      </button>
      {showBio && <p className="bio">{bio}</p>}
    </div>
  );
}
