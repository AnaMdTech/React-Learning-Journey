import MovieItem from "./MovieItem";

const movies = [
  { id: 1, title: "Interstellar", year: 2014 },
  { id: 2, title: "Inception", year: 2010 },
  { id: 3, title: "The Dark Knight", year: 2008 },
  { id: 4, title: "Shutter Island", year: 2010 },
];

export default function MovieList() {
  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <MovieItem key={movie.id} title={movie.title} year={movie.year} />
      ))}
    </ul>
  );
}
