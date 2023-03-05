import React from "react";

function MovieDetails (props) {
  const handleClose = () => {
  props.clearSelectedMovie();
  };
  
  return (
  <div className="row">
    <div className="col-md-6 offset-md-3">
      <div className="card">
      <img src={props.movie.Poster} className="card-img-top" alt={props.movie.Title} />
      <div className="card-body">
        <h5 className="card-title">{props.movie.Title}</h5>
        <p className="card-text">{props.movie.Plot}</p>
        <button className="btn btn-primary" onClick={handleClose}>
          Close
        </button>
      </div>
      </div>
    </div>
  </div>
  );
  }
  
  export default MovieDetails;
