import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  transition: all 0.3s ease;

  &:hover {
    color: rgba(0, 77, 64);
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  }
`;
