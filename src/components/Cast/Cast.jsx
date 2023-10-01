import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastList, CastItem } from './Cast.styled';
import { fetchMovieCast } from 'services/themoviedb-api';
import Section from 'components/Section/Section';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const dataCast = await fetchMovieCast(movieId);
        setCast(dataCast);
      } catch (error) {
        console.error(error);
      }
    };
    getMovieCast();
  }, [movieId]);

  return (
    <Section>
      {cast.length !== 0 ? (
        <div>
          <h2>Movie Cast</h2>
          <CastList>
            {cast.map(actor => (
              <CastItem key={actor.id}>
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                      : `https://via.placeholder.com/200x300`
                  }
                  alt={actor.original_name}
                />
                <p>{actor.name}</p>
              </CastItem>
            ))}
          </CastList>
        </div>
      ) : (
        <div>We don't have any cast for this movie.</div>
      )}
    </Section>
  );
};

export default Cast;
