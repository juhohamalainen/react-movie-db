import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { Container, Row, Col, Carousel } from "react-bootstrap";


const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const API_KEY = "8b2c24e8127461411e286202c60eb351"


  useEffect(() => {
    const fetchTopMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        );
        setTopMovies(response.data.results.slice(0, 10));
      } catch (error) {
        console.error(error);
      }
    };
  
    console.log("Before fetchTopMovies");
    fetchTopMovies();
    console.log("After fetchTopMovies");
  }, []);
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <h2 className="mt-5 mb-4">Top 10 Most Popular Movies</h2>
      <Slider {...settings}>
        {topMovies.map((movie) => (
          <div key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={`${movie.title} Poster`}
              style={{ height: "400px" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;
