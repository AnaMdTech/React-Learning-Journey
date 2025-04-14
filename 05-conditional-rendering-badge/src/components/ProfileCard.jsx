import Avatar from "./Avatar";
import StatusBadge from "./StatusBadge";

export default function ProfileCard({ name, role, available, status }) {
  return (
    <div className="profile-card">
      <Avatar />
      <h2>{name}</h2>
      <p>{role}</p>
      {available && <StatusBadge text={status} />}
      {!available && <StatusBadge text={status} />}
    </div>
  );
}
