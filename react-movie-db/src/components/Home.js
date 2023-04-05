import React, { useState, useEffect } from "react";
import MovieService from "../services/MovieService";
import MovieItem from "./MovieItem";
import MovieDetails from "./MovieDetails";
import { Carousel } from "react-bootstrap";

const Home = ({ theme, getMovieDetails, selectedMovie, clearSelectedMovie, selectedGenreId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      const response = await MovieService.getTopRatedMovies();
      const topRatedMovies = response.data.results;
      if (selectedGenreId) {
      const filteredMovies = topRatedMovies
        .filter(movie => movie.genre_ids.some((genre_id) => genre_id.toString() === selectedGenreId.toString()));
      setMovies(filteredMovies);
      }
      else {
        setMovies(topRatedMovies);
      }
    };
    fetchTopRatedMovies();
  }, [selectedGenreId]);
  
  return (
    <div className={`Home ${theme}`}>
      {selectedMovie ? (
        <MovieDetails
          movie={selectedMovie}
          clearSelectedMovie={clearSelectedMovie}
          theme={theme}
        />
      ) : (
        <Carousel>
          {movies.map((movie) => (
            <Carousel.Item key={movie.id}>
              <div className="row align-items-center">
                <div className="col-md-6 w-auto">
                  <img
                    className="d-block w-auto"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                </div>
                <div className="col-md-6">
                  <Carousel.Caption style={{ color: theme === "dark" ? "white" : "black" }}
                  className="text-left">
                    <h3>{movie.title}</h3>
                    <p style={{ whiteSpace: "pre-wrap" }}>{movie.overview}</p>
                    <p>{movie.release_date}</p>
                    <button
                      className={`btn btn-primary ${theme}`}
                      onClick={() => getMovieDetails(movie.title)}
                    >
                      More Info
                    </button>

                  </Carousel.Caption>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default Home;
