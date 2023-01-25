import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderSection = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 15px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
`;

export const StyledLink = styled(NavLink)`
  margin: 8px;
  padding: 5px;
  text-decoration: none;
  color: darkblue;
  font-size: 32px;
  border-radius: 4px;
  &.active {
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
    color: darkorange;
    scale: 1.05;
  }
`;
