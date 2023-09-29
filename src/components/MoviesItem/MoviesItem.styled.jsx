import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieItem = styled.li`
  position: relative;
  max-width: 300px;
  overflow: hidden;
  border-radius: 8px;
  transition: all 0.3s ease;
  &:hover {
    cursor: pointer;
    color: #fff;
    background-color: rgba(0, 77, 64, 0.8);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 300px;
  padding: 10px;
  text-align: start;
  font-size: 18px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
  pointer-events: none;
  ul {
    list-style: none;
  }
  li {
    margin-bottom: 20px;
  }
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;

  p {
    margin: 0;
    padding: 10px;
    max-width: 200px;
    text-align: center;
    font-size: 16px;
  }

  &:hover {
    cursor: pointer;
    color: #fff;
    + ${MovieInfo} {
      left: 0;
    }
  }
`;

export const AdultInfo = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 10px;
  right: 10px;
  width: 36px;
  height: 36px;
  font-weight: 700;
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
`;
