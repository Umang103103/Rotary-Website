import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  // Auto-advance slider every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="hero-slider"
      fade
    >
      {images.map((image, idx) => (
        <Carousel.Item key={idx}>
          <div className="slider-image-wrapper">
            <img
              className="d-block w-100"
              src={image}
              alt={`Slide ${idx + 1}`}
            />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageSlider;
