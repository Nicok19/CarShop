import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="carousel-container">
      <div className="carousel">
        {images.map((image, index) => (
          <img
            key={index}
            src={process.env.PUBLIC_URL + '/img/' + image}
            alt={`Slide ${index}`}
            style={{
              display: index === currentImageIndex ? 'block' : 'none',
              width: '100%',
              height: 'auto',
            }}
          />
        ))}
      </div>
    </div>
  );
};

const CarouselImg = () => {
  const images = ['diapo1.png', 'diapo2.png', 'diapo3.png'];

  return <Carousel images={images} />;
};

export default CarouselImg;




