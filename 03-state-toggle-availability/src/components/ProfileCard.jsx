import Avatar from "./Avatar";
import UserInfo from "./UserInfo";

export default function ProfileCard({ isAvailable, toggle }) {
  return (
    <div className="profile-card">
      <Avatar />
      <UserInfo isAvailable={isAvailable} />
      <button className="toggle-btn" onClick={toggle}>
        Toggle Availability
      </button>
    </div>
  );
}
