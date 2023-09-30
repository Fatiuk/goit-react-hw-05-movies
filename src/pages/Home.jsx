import React, { useState, useEffect } from 'react';
import { RingLoader } from 'react-spinners';
import { fetchTrendingMovies } from 'services/themoviedb-api';
import Hero from 'components/Hero/Hero';
import MoviesList from 'components/MoviesList/MoviesList';

export const Home = () => {
  // State to store data about trending movies
  const [trendingMovies, setTrendingMovies] = useState([]);
  // State to track loading state
  const [loading, setLoading] = useState(true);

  // Fetch movie data when the component mounts
  useEffect(() => {
    // Function for asynchronous data fetching
    const fetchMoviesData = async () => {
      try {
        // Perform a request to get trending movies
        const movies = await fetchTrendingMovies();
        // Update the trendingMovies state with the movie data
        setTrendingMovies(movies);
        // Set loading to false to indicate that data has been loaded
        setLoading(false);
      } catch (error) {
        // If an error occurs, log it to the console
        console.error(error);
      }
    };
    // Call the fetchMoviesData function when the component mounts
    fetchMoviesData();
  }, []);

  return (
    <main>
      <Hero />
      {loading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <RingLoader color="#004d40" size={120} />
        </div>
      ) : (
        <MoviesList films={trendingMovies} />
      )}
    </main>
  );
};
