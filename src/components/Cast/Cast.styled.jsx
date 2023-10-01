import styled from 'styled-components';

export const CastList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const CastItem = styled.li`
  text-align: center;
  img {
    width: 100%;
    max-width: 200px;
    height: auto;
    border-radius: 5px;
  }
  p {
    margin-top: 10px;
  }
`;
