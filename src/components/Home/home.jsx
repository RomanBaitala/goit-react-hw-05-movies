import { useEffect, useState } from 'react';
import { fetchTrendingFilms } from 'api/fethcFilms';
import MovieList from 'components/MovieList/movieList';

const Trending = () => {
  const [filmList, setFilmList] = useState([]);

  document.title = 'Trending movies';

  useEffect(() => {
    fetchTrendingFilms().then(setFilmList);
  }, []);

  return (
    filmList?.total_results && (
      <MovieList
        filmList={filmList}
        state={{ from: '/', addPath: 'movies/' }}
      />
    )
  );
};

export default Trending;
