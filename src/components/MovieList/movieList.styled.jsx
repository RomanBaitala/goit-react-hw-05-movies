import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledMovieList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  list-style: none;
`;

export const StyledMovieItem = styled.li`
  padding: 0;
  word-wrap: none;
  padding: 0;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const StyledMovieLink = styled(Link)`
  margin: 10px;
  padding: 10px;
  width: 350px;
  font-size: 14px;
  font-weight: normal;
  text-decoration: none;
  color: darkblue;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  &.active {
    text-decoration: underline;
    color: darkred;
  }
`;
