import React from "react";
import MovieItem from "./MovieItem";

function MovieList(props) {
  const renderMovies = () => {
    return props.movies.map((movie) => {
      return <MovieItem key={movie.imdbID} movie={movie} getMovieDetails={props.getMovieDetails} />;
    });
  };

  return <div className="row">{renderMovies()}</div>;
}

export default MovieList;
