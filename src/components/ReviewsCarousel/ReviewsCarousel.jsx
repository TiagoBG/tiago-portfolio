import reviews from '../../api/reviews.json';
import './reviews-carousel.css'

const ReviewsCarousel = () => {
  return (
    <article className="review__container">
      <div className="review__slide">        
        <p className='review__info'>"{reviews[3].review}"</p>
        <div className='review__details'>
        <p>{reviews[3].name}</p>
        <p>{reviews[3].role} @ {reviews[3].company}</p>
        </div>
      </div>
    </article>
  );
};

export default ReviewsCarousel;
