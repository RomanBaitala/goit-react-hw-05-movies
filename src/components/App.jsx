import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/sharedlayout';

const Home = lazy(() => import('./Home/home'));
const SearchMovie = lazy(() => import('./SearchMovie/searchMovie'));
const MovieInfo = lazy(() => import('./MovieDetails/movieDetails'));
const Cast = lazy(() => import('./Cast/cast'));
const Reviews = lazy(() => import('./Reviews/reviews'));

document.title = 'Home';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="movies"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <SearchMovie />
              </Suspense>
            }
          />
          <Route
            path="movies/:movieId"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <MovieInfo />
              </Suspense>
            }
          >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};
