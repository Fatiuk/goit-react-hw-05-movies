import styled from 'styled-components';

export const ReviewsContainer = styled.div`
  padding: 20px;
  margin-top: 20px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: inherit;
`;

export const ReviewItem = styled.div`
  align-items: baseline;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 8px;
  text-align: start;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const UserName = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid white;
  svg {
    margin-right: 5px;
  }
`;

export const ReviewContent = styled.p`
  flex-grow: 1;
`;
