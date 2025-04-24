import { useState, useEffect } from "react";
import Header from "./components/Header"
import Main from "./components/Main"
const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}&s=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.Search));
  }, [searchTerm]);

  useEffect(() => {
    fetch(`${API_URL}&s=Avengers`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === "True") {
          const sorted = data.Search.filter(
            (movie) =>
              movie.Year && !isNaN(movie.Year) && movie.Poster !== "N/A"
          )
            .sort((a, b) => parseInt(b.Year) - parseInt(a.Year))
            .slice(0, 6);

          setTrending(sorted);
        }
      });
  }, []);

  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Main movies={movies} trending={trending} />
    </>
  )
}

export default App
