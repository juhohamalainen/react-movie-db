import React from "react";
import MovieItem from "./MovieItem";

function SearchResults(props) {
  console.log("SearchResults props:", props);

  return (
    <div className="row">
      {props.movies.map((movie) => (
        <div key={movie.imdbID} className="col-md-4">
          <MovieItem movie={movie} onSelectMovie={props.onSelectMovie} />
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
