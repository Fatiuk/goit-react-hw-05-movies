import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { fetchTrendingMovies } from 'services/themoviedb-api';
import MoviesList from 'components/MoviesList/MoviesList';

export const Home = () => {
  // State to store data about trending movies
  const [trendingMovies, setTrendingMovies] = useState([]);

  // Fetch movie data when the component mounts
  useEffect(() => {
    // Function for asynchronous data fetching
    const fetchMoviesData = async () => {
      try {
        // Perform a request to get trending movies
        const movies = await fetchTrendingMovies();
        // Update the trendingMovies state with the movie data
        setTrendingMovies(movies);
      } catch (error) {
        // If an error occurs, log it to the console
        console.error(error);
      }
    };
    // Call the fetchMoviesData function when the component mounts
    fetchMoviesData();
  }, []);

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <main>
      <h1>Welcome to Meren Movies</h1>
      <Slider {...sliderSettings}>
        <div>
          <img src="https://via.placeholder.com/960x240" alt="" />
        </div>
        <div>
          <img src="https://via.placeholder.com/960x240" alt="" />
        </div>
        <div>
          <img src="https://via.placeholder.com/960x240" alt="" />
        </div>
      </Slider>
      <p>
        Explore Meren Movies - your gateway to captivating cinematic
        experiences! We offer a diverse selection of popular films, the latest
        movie releases, and cinematic classics. Immerse yourself in the world of
        cinema with our collection of films spanning various genres, discover
        the perfect movie to watch with friends and family, explore reviews and
        ratings, and dive into unforgettable cinematic adventures. At Meren
        Movies, you always have access to the thrilling realm of film!
      </p>
      <MoviesList films={trendingMovies} />
    </main>
  );
};
