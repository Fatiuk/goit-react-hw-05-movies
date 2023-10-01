import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { RingLoader } from 'react-spinners';
import { fetchMovieDetails } from 'services/themoviedb-api';
import {
  MovieWrap,
  MovieInfo,
  MovieGeneral,
  MovieTime,
  GenresList,
  GenresItem,
  ProductionCompaniesList,
  ProductionCompanyItem,
} from './MoviePage.styled';
import Section from 'components/Section/Section';

const MoviePage = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();

  const {
    title,
    overview,
    genres,
    runtime,
    release_date,
    backdrop_path,
    poster_path,
    production_companies,
  } = movieDetails || {};

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const movie = await fetchMovieDetails(movieId);
        setMovieDetails(movie);
      } catch (error) {
        console.error(error);
      }
    };
    getMovieDetails();
  }, [movieId]);

  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
    : 'https://via.placeholder.com/400x600';

  const formatRuntime = runtime => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours} hours ${minutes} minutes`;
  };

  return (
    <Section>
      {movieDetails ? (
        <MovieWrap backdrop={backdrop_path}>
          <img src={imageUrl} alt={title} loading="lazy" />
          <MovieInfo>
            <h1>{title}</h1>
            <MovieGeneral>
              <MovieTime>
                <AiOutlineFieldTime />
                <p>{formatRuntime(runtime)}</p>
              </MovieTime>
              <p>Release {release_date}</p>
            </MovieGeneral>
            <h2>Overview</h2>
            <p>{overview}</p>
            {genres && genres.length > 0 && (
              <div>
                <h2>Genres</h2>
                <GenresList>
                  {genres.map(genre => (
                    <GenresItem key={genre.id}>{genre.name}</GenresItem>
                  ))}
                </GenresList>
              </div>
            )}

            {production_companies && production_companies.length > 0 && (
              <div>
                <h2>Production Companies</h2>
                <ProductionCompaniesList>
                  {production_companies.map(company => (
                    <ProductionCompanyItem key={company.id}>
                      {company.logo_path ? (
                        <img
                          src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                          alt={company.name}
                        />
                      ) : (
                        <div className="placeholder">No Logo</div>
                      )}
                      <p>{company.name}</p>
                    </ProductionCompanyItem>
                  ))}
                </ProductionCompaniesList>
              </div>
            )}
          </MovieInfo>
        </MovieWrap>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <RingLoader color="#004d40" size={120} />
        </div>
      )}
    </Section>
  );
};

export default MoviePage;
