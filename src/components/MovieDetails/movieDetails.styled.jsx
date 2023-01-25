import styled from 'styled-components';

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

export const Box = styled.div``;
