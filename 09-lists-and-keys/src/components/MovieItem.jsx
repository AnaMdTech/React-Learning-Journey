export default function MovieItem({ title, year }) {
  return (
    <li className="movie-item">
      <span>{title}</span> <small>({year})</small>
    </li>
  );
}
