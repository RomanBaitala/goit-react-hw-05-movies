import { fetchFilmDetails } from 'api/fethcFilms';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Button, Box } from './movieDetails.styled';

const FilmDetails = () => {
  const params = useParams();
  const movieId = parseInt(params.movieId);
  const [filmData, setFilmData] = useState({});
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    fetchFilmDetails(movieId).then(setFilmData);
  }, [movieId]);

  const { title, tagline, poster_path, overview, release_date } = filmData;

  document.title = `Movie info - ${title}`;

  return (
    <Box>
      <Link to={backLinkHref}>
        <Button>
          <span>Go back </span>
        </Button>
      </Link>
      <Box>
        <Box>
          <img
            width="300"
            height="450"
            alt={tagline}
            src={
              poster_path
                ? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${poster_path}`
                : ''
            }
          />
        </Box>
        <Box>
          <h1>
            {title} <span>({String(release_date).slice(0, 4)})</span>
          </h1>
          <p>{overview}</p>
        </Box>
      </Box>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default FilmDetails;
