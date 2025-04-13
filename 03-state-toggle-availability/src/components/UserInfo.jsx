export default function UserInfo({ name, role, skills }) {
  return (
    <>
      <h2>{name}</h2>
      <p>{role}</p>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </>
  );
}
