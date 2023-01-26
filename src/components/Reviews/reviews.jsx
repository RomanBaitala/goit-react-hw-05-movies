import { fetchFilmReviews } from 'api/fethcFilms';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewList, Author, Comment, ReviewItem } from './reviews.styled';

const Reviews = () => {
  const params = useParams();
  const movieId = parseInt(params.movieId);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchFilmReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <ReviewList>
      {reviews && reviews.length > 0 ? (
        reviews.map(({ id, author, content }) => {
          return (
            <ReviewItem key={id}>
              <Author>{author}</Author>: <Comment>{content}</Comment>
            </ReviewItem>
          );
        })
      ) : (
        <ReviewItem>No reviews yet...</ReviewItem>
      )}
    </ReviewList>
  );
};

export default Reviews;
