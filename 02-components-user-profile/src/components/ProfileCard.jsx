import Avatar from "./Avatar";
import UserInfo from "./UserInfo";

const skills = ["HTML", "CSS", "JavaScript", "React"];

export default function ProfileCard() {
  return (
    <div className="card">
      <Avatar src="https://avatars.githubusercontent.com/u/149268124?s=400&u=0b5abba4129432aad1ae8b94b25ebcc4a37d7469&v=4" />
      <UserInfo name="Ana Mohammed" role="Frontend Developer" skills={skills} />
    </div>
  );
}
