import { useEffect, useState, Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { MdReviews } from 'react-icons/md';
import { fetchMovieDetails } from 'services/themoviedb-api';
import {
  MovieWrap,
  MovieInfo,
  MovieGeneral,
  MovieTime,
  GenresList,
  GenresItem,
  MovieLinksWrap,
  ProductionCompaniesList,
  ProductionCompanyItem,
  Link,
} from './MoviePage.styled';
import Section from 'components/Section/Section';
import Loader from 'components/Loader/Loader';

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

  const location = useLocation();
  console.log(location);

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
                    <GenresItem key={genre.id}>#{genre.name}</GenresItem>
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
                        <div>No Logo</div>
                      )}
                      <p>{company.name}</p>
                    </ProductionCompanyItem>
                  ))}
                </ProductionCompaniesList>
              </div>
            )}
            <MovieLinksWrap>
              <Link to="cast" state={{ from: location.state?.from }}>
                <BsFillPeopleFill />
                Cast
              </Link>
              <Link to="reviews" state={{ from: location.state?.from }}>
                <MdReviews />
                Reviews
              </Link>
            </MovieLinksWrap>
          </MovieInfo>
        </MovieWrap>
      ) : (
        <Loader />
      )}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Section>
  );
};

export default MoviePage;
