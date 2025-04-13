export default function UserInfo({ isAvailable }) {
  return (
    <div className="user-info">
      <h2>Ana Mohammed</h2>
      <p>Frontend Developer</p>
      <p className={isAvailable ? "available" : "unavailable"}>
        {isAvailable ? "✅ Available for work" : "❌ Currently unavailable"}
      </p>
    </div>
  );
}
