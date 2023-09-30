import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { BackLink } from 'components/BackLink/BackLink';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from || '/');
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore itaque,
        aliquid inventore veritatis soluta, unde ut eligendi culpa totam
        possimus cumque? Consequatur quas quibusdam eligendi quos dicta incidunt
        sit excepturi.
      </p>
      <BackLink to={backLinkHref.current}>Back to Previous Action</BackLink>
    </>
  );
};

export default MovieDetails;
