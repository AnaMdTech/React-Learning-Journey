import FilterList from './FilterList'
import MovieFilter from './MovieFilter';
import MovieList from './MovieList';
import TrendMovies from './TrendMovies';

function Main({ movies, trending }) {
  return (
    <main>
      <FilterList />
      <TrendMovies trends={trending} />
      <MovieFilter />
      <MovieList movies={movies} />
    </main>
  );
}

export default Main
