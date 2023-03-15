import React from "react";
import MovieItem from "./MovieItem";


function MovieList(props) {
  return (
    <div className="container">
      <div className="row">
        {props.movies.map((movie) => (
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
