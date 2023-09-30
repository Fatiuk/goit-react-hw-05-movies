import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { BackLink } from 'components/BackLink/BackLink';
import MoviePage from 'components/MoviePage/MoviePage';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from || '/');
  return (
    <>
      <BackLink to={backLinkHref.current}>Back to Previous Action</BackLink>
      <MoviePage></MoviePage>
    </>
  );
};

export default MovieDetails;
