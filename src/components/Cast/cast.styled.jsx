import styled from 'styled-components';

export const CastList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const CastItem = styled.li`
  padding: 10px;
  margin: 5px;
  font-size: 14px;
  font-weight: normal;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
`;

export const CastMeta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  font-weight: normal;
  margin: 0;
`;

export const ActorName = styled.p`
  margin: 5px;
  font-size: 18px;
  font-weight: bold;
`;

export const Span = styled.span`
  font-weight: normal;
`;

export const CharacterName = styled.p`
  margin: 5px;
  font-weight: bold;
`;
