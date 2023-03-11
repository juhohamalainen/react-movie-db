import React, { useState, useEffect } from "react";
import MovieService from "../services/MovieService";
import MovieItem from "./MovieItem";
import MovieDetails from "./MovieDetails";
import { Carousel } from "react-bootstrap";

const Home = ({ theme }) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      const response = await MovieService.getTopRatedMovies();
      const topRatedMovies = response.data.results;
      setMovies(topRatedMovies);
    };
    fetchTopRatedMovies();
  }, []);

  const getMovieDetails = async (id) => {
    const response = await MovieService.getMovieDetails(id);
    setSelectedMovie(response.data);
  };

  const clearSelectedMovie = () => {
    setSelectedMovie(null);
  };

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
              <img
                className="d-block w-25"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <Carousel.Caption
                style={{ color: theme === "dark" ? "white" : "black" }}
                className="text-left"
              >
                <h3>{movie.title}</h3>
                <p style={{ whiteSpace: "pre-wrap" }}>{movie.overview}</p>
                <p>{movie.release_date}</p>
                <button
                  className={`btn btn-primary ${theme}`}
                  onClick={() => getMovieDetails(movie.id)}
                >
                  More Info
                </button>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default Home;
