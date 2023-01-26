import {
  StyledMovieItem,
  StyledMovieList,
  StyledMovieLink,
} from './movieList.styled';

const MovieList = ({ filmList, state }) => {
  return (
    <StyledMovieList>
      {filmList.results.map(film => {
        return (
          <StyledMovieItem key={film.id}>
            <StyledMovieLink to={`${state.addPath}${film.id}`} state={state}>
              {film.title ?? film.original_title}
            </StyledMovieLink>
          </StyledMovieItem>
        );
      })}
    </StyledMovieList>
  );
};

export default MovieList;
