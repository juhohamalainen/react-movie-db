import React from "react";

function MovieItem(props) {
  const handleClick = () => {
    props.getMovieDetails(props.movie.imdbID);
  };

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <img src={props.movie.Poster} className="card-img-top" alt={props.movie.Title} />
        <div className="card-body">
          <h5 className="card-title">{props.movie.Title}</h5>
          <p className="card-text">{props.movie.Year}</p>
          <button className="btn btn-primary" onClick={handleClick}>
            Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieItem;
