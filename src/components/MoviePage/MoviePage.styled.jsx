import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: flex;
  justify-content: space-around;
  text-decoration: none;
  padding: 10px;
  width: 98px;
  border-radius: 4px;
  color: #fff;
  background-color: #004d40;
  transition: all 0.3s;
  &:hover {
    color: inherit;
    background-color: #fff;
  }
`;

export const MovieWrap = styled.div`
  display: flex;
  column-gap: 24px;
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: calc(100% + 10px);
    height: calc(100vh + 10px);
    background-image: ${props =>
      props.backdrop
        ? `url('https://image.tmdb.org/t/p/w500/${props.backdrop}')`
        : 'white'};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    filter: blur(5px);
    z-index: -1;
    opacity: 0.35;
  }
`;

export const MovieInfo = styled.div``;

export const MovieGeneral = styled.div`
  display: flex;
  justify-content: space-around;
  p {
    margin: 0;
  }
`;

export const MovieTime = styled.div`
  display: flex;
  gap: 12px;
`;

export const GenresList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  gap: 12px;
`;

export const GenresItem = styled.li`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #004d40;
`;

export const ProductionCompaniesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
`;

export const ProductionCompanyItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;

  img {
    width: 50px;
    height: auto;
    object-fit: contain;
  }

  p {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const MovieLinksWrap = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: center;
  gap: 40px;
`;
