export default function Skills({ skills }) {
  return (
    <ul className="skills-list">
      {skills.map((skill, index) => (
        <li key={index} className={`skill skill-${index}`}>
          {skill}
        </li>
      ))}
    </ul>
  );
}
