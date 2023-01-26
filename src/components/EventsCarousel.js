import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './EventsCarousel.css';
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";

function EventsCarousel() {
  return (
    <Carousel variant="dark" className="carousel-1">
      <Carousel.Item >
        <img 
          className="img1"
          src={img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img 
          className="img2"
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="img3"
          src={img3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="img4"
          src={img4}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    
  );
}

export default EventsCarousel;