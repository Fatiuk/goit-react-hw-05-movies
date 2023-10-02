import React, { useState, useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';
import Searchbar from 'components/Searchbar/Searchbar';
import MoviesList from 'components/MoviesList/MoviesList';
import { fetchMovieByName } from 'services/themoviedb-api';

const Movies = () => {
  // State to store the search query from the form (searchbar query)
  const [queryMovies, setQueryMovies] = useState('');
  // State to store movie data based on the search query
  const [searchMovies, setSearchMovies] = useState([]);
  // State to track loading state
  const [loading, setLoading] = useState(false);

  const [searchParams] = useSearchParams();

  // Function to handle form submission
  const handleSubmit = query => {
    setQueryMovies(query);
  };

  // Function for asynchronous data fetching
  const fetchMoviesData = async () => {
    try {
      setLoading(true);
      // Perform a request to get movies by nam
      const movies = await fetchMovieByName(queryMovies);
      // Update the searchMovies state with the movie data
      setSearchMovies(movies);
      // Set loading to false to indicate that data has been loaded
      setLoading(false);
    } catch (error) {
      // If an error occurs, log it to the console
      console.error(error);
      setLoading(false);
    }
  };

  // Fetch movie data when the component mounts
  useEffect(() => {
    fetchMoviesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryMovies, searchParams]);

  // Fetch movie data when the component mounts or when 'query' param changes
  useEffect(() => {
    // Check if 'query' param exists in searchParams
    const initialQuery = searchParams.get('query');
    if (initialQuery) {
      // Set the queryMovies state
      setQueryMovies(initialQuery);
      fetchMoviesData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <div>
      <Searchbar onSubmit={handleSubmit} />
      {loading ? (
        <Loader />
      ) : (
        <>
          {searchParams.get('query') && (
            <h2>Discovered Movies by Keyword {searchParams.get('query')} </h2>
          )}
          <MoviesList films={searchMovies} />
        </>
      )}
    </div>
  );
};

export default Movies;
