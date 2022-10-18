import { useEffect, useRef, useState } from 'react';
import reviews from '../../api/reviews.json';
import './reviews-carousel.css';

const delay = 8000;

const ReviewsCarousel = () => {
const [currentIndex, setCurrentIndex] = useState(0);
const timeoutRef = useRef(null);

const resetTimeout = () => {
  if(timeoutRef.current){
    clearTimeout(timeoutRef.current);
  }
}

useEffect(() => {
  resetTimeout();
  timeoutRef.current = setTimeout(() => {
    currentIndex === reviews.length - 1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1);
  }, delay);

  return () => {
    resetTimeout();
  }
}, [currentIndex]);



  return (
    <article className="review__container">
      <div className="review__slideshow" 
      style={{ transform: `translate3d(${-currentIndex * 100}%, 0, 0)` }}>
        {reviews.map(review => (
          <div className="review__slide" key={review.id}>
            <div className='review__info'>
            <p className='review__data'>"{review.review}"</p>
            <div className='review__details'>
              <p>{review.name}</p>
              <p>{review.role} @ {review.company}</p>
            </div>
            </div>
          </div>
        ))}
      </div>
      <div className="slideshowDots">
        {reviews.map((_, i) => (
          <div key={i} className={`slideshowDot${currentIndex === i ? " active" : ""}`}
          onClick={()=> setCurrentIndex(i)}></div>
        ))}
      </div>
    </article>
  );
};

export default ReviewsCarousel;
