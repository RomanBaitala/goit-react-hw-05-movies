import styled from 'styled-components';

export const ReviewList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ReviewItem = styled.li`
  padding: 10px;
  margin: 10px;
  font-size: 14px;
  font-weight: normal;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
`;

export const Author = styled.span`
  font-weight: bold;
`;

export const Comment = styled.span`
  margin: 0 0 0 10px;
  font-size: 14px;
  font-weight: normal;
`;
