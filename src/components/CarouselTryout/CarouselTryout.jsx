import { useEffect, useRef, useState } from "react";
import "./carousel-styles.scss";
const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 8000;

const CarouselTryout = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef(null);

    const resetTimeout = ()=>{
        if(timeoutRef.current){
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
      timeoutRef.current = setTimeout(() => {
        currentIndex === colors.length - 1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1);
      }, delay);
      return () => {
        resetTimeout();
      };
    }, [currentIndex]);    
    

  return (
    <div className="slideshow">
      <div className="slideshowSlider" style={{transform: `translate3d(${-currentIndex * 100}%, 0, 0)`}}>
        {colors.map((backgroundColor, i) => (
            <div className="slide" key={i} style={{backgroundColor}}></div>
        ))}
      </div>
      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div key={idx} className={`slideshowDot${currentIndex === idx ? " active" : ""}`} onClick={() => {
              setCurrentIndex(idx);
            }}></div>
        ))}
      </div>
    </div>
  );
};

export default CarouselTryout;
