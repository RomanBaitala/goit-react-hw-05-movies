import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  display: inline-block;
  border-radius: 4px;
  background-color: #f4511e;
  border: none;
  color: #000;
  text-align: center;
  font-size: 24px;
  padding: 14px;
  font-weight: 600;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 3px;
  & span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
  }
  & span::after {
    content: '»';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
  }
  &:hover span {
    padding-right: 25px;
  }

  &:hover span::after {
    opacity: 1;
    right: 0;
  }
`;

export const MovieInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const MovieTitle = styled.h1`
  margin: 0 0 20px;
  font-size: 36px;
  font-weight: bold;
`;

export const MovieYear = styled.span`
  font-size: 32px;
  font-weight: normal;
`;

export const MovieMeta = styled.div`
  display: flex;
  padding: 10px 0 20px;
  border-bottom: 1px solid #000000;
`;

export const MovieDescription = styled.p`
  margin: 0 0 0 10px;
  font-size: 16px;
  font-weight: normal;
`;

export const DescriptionLink = styled(Link)`
  margin: 10px 0 0;
  font-size: 16px;
  font-weight: bold;
  text-decoration: underline;
  color: #222244;
`;

export const MovieLinks = styled.div`
  display: flex;
  padding: 0 0 20px;
  flex-direction: column;
  border-bottom: 1px solid #000000;
`;
