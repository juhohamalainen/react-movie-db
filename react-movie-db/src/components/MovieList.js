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
            getMovieDetails2={props.getMovieDetails2}
            theme={props.theme}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
