import { fetchFilmDetails } from 'api/fethcFilms';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import {
  Button,
  DescriptionLink,
  MovieDescription,
  MovieInfoContainer,
  MovieLinks,
  MovieMeta,
  MovieTitle,
  MovieYear,
} from './movieDetails.styled';

const MovieDetails = () => {
  const params = useParams();
  const movieId = parseInt(params.movieId);
  const [filmData, setFilmData] = useState({});

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    fetchFilmDetails(movieId).then(setFilmData);
  }, [movieId]);

  const { title, tagline, poster_path, overview, release_date } = filmData;

  document.title = `React HW05 - Movie info - ${title}`;

  return (
    <MovieInfoContainer>
      <Link to={backLinkHref}>
        <Button>Go back</Button>
      </Link>
      {title && overview ? (
        <>
          <MovieTitle>
            {title} <MovieYear>({String(release_date).slice(0, 4)})</MovieYear>
          </MovieTitle>
          <MovieMeta>
            <img
              width="300"
              height="450"
              alt={tagline}
              src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${poster_path}`}
            />
            <MovieDescription>{overview}</MovieDescription>
          </MovieMeta>
          <MovieLinks>
            <DescriptionLink to="cast" state={{ from: `${backLinkHref}` }}>
              Cast
            </DescriptionLink>
            <DescriptionLink to="reviews" state={{ from: `${backLinkHref}` }}>
              Reviews
            </DescriptionLink>
          </MovieLinks>
          <Suspense fallback={<p>Loading...</p>}>
            <Outlet />
          </Suspense>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </MovieInfoContainer>
  );
};

export default MovieDetails;
