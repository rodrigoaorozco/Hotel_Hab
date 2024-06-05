import React, { useState, useEffect } from 'react';

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    'images/carousel/recepcion2.jpg',
    'images/carousel/jardin.jpg',
    'images/carousel/piscina.jpg',
    'images/carousel/bar.jpg',
    'images/carousel/comedor3.jpg',
    'images/carousel/fachada.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia de imagen cada 3 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-2/4 m-auto">
      <div className="relative w-full overflow-hidden h-64">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={image} className="w-full h-full object-cover" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      <button
        className="absolute bottom-0 left-0 top-0 z-10 flex w-1/6 items-center justify-center bg-none text-white opacity-50 hover:opacity-100 transition-opacity duration-150 ease-in-out"
        type="button"
        onClick={goToPrevSlide}
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span className="sr-only">Previous</span>
      </button>

      <button
        className="absolute bottom-0 right-0 top-0 z-10 flex w-1/6 items-center justify-center bg-none text-white opacity-50 hover:opacity-100 transition-opacity duration-150 ease-in-out"
        type="button"
        onClick={goToNextSlide}
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
