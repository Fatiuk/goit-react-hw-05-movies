import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieItem = styled.li``;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: #191d1e;

  &:hover {
    color: #004d40;
  }
`;
