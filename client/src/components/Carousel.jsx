import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const imageStyle = {
    width: '100%',
    height: '450px',
    objectFit: 'cover', // or 'contain', depending on your preference
  };

  return (
    <Slider {...settings} style={{ height: '450px' }}>
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img src="https://mobirise.com/extensions/commercem4/assets/images/gallery03.jpg" alt="Slide 2" style={imageStyle} /> 
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img src="https://mobirise.com/extensions/commercem4/assets/images/gallery04.jpg" alt="Slide 3" style={imageStyle} />
      
      
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img src="https://mobirise.com/extensions/commercem4/assets/images/gallery02.jpg" alt="Slide 2" style={imageStyle} />  
      
      </div>
      
    </Slider>
  );
};

export default Carousel;
