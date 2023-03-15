import React from "react";

function MovieDetails (props) {
  const handleClose = () => {
  props.clearSelectedMovie();
  };
  
  return (
  <div className="row">
    <div className="col-md-6 offset-md-3">
      <div className={`card ${props.theme}`}>
        <img src={props.movie.Poster} className="card-img-top" alt={props.movie.Title} />
        <div className="card-body">
          <h5 className="card-title">{props.movie.Title} ({props.movie.Year})</h5>
          <p className="card-text"><strong>Director: </strong>{props.movie.Director}</p>
          <p className="card-text"><strong>Actors: </strong>{props.movie.Actors}</p>
          <p className="card-text"><strong>Genres: </strong>{props.movie.Genre}</p>
          <p className="card-text"><strong>Age Rating: </strong>{props.movie.Rated}</p>
          <p className="card-text"><strong>Storyline: </strong>{props.movie.Plot}</p>
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
