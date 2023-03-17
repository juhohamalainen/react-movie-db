import React from "react";
import MovieItem from "./MovieItem";

function MovieList(props) {
  // Filter movies based on selected genre
  const filteredMovies = props.selectedGenre
    ? props.movies.filter((movie) => movie.genre.includes(props.selectedGenre))
    : props.movies;

  return (
    <div className="container">
      <div className="row">
        {filteredMovies.map((movie) => (
          <MovieItem
            key={movie.imdbID}
            movie={movie}
            getMovieDetails={props.getMovieDetails}
            theme={props.theme}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
