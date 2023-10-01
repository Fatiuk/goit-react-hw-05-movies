import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { fetchMovieReviews } from 'services/themoviedb-api';
import {
  ReviewsContainer,
  Title,
  ReviewItem,
  UserName,
  ReviewContent,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        const response = await fetchMovieReviews(movieId);
        setReviews(response);
      } catch (error) {
        console.error(error);
      }
    };
    getMovieReviews();
  }, [movieId]);

  return (
    <ReviewsContainer>
      {reviews.length !== 0 ? (
        <>
          <Title>Movie Reviews</Title>
          {reviews.map(review => (
            <ReviewItem key={review.id}>
              <UserName>
                <FaUser size={20} />
                {review.author}
              </UserName>
              <ReviewContent>{review.content}</ReviewContent>
            </ReviewItem>
          ))}
        </>
      ) : (
        <div>We don't have any reviews for this movie.</div>
      )}
    </ReviewsContainer>
  );
};

export default Reviews;
