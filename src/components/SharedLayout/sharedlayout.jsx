import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderSection, StyledLink } from './sharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <HeaderSection>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </HeaderSection>

      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
