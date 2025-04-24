function TrendMovies({ trends }) {
  return (
    <div className="bg-[#f2f3f7] border-b-1 border-[#0000001a] py-[5px]">
      <div className="grid grid-cols-3 md:grid-cols-3 gap-1">
        {trends
          .filter((trend) => trend.year !== "N/A")
          .map((movie) => (
            <div
              key={movie.imdbID}
              className="rounded overflow-hidden shadow-lg relative"
            >
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-full h-full"
              />

              {/* Glassmorphism Overlay */}
              <div className="absolute bottom-0 left-0 w-full px-2 py-1 text-gray-300 text-sm text-center bg-[rgba(0,0,0,0.5)]">
                {movie.Title}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default TrendMovies;
