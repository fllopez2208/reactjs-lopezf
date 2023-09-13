import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Home.css'; // Asegúrate de importar tus estilos aquí
import dos from './2.jpg';
import tres from './3.png';
import cuatro from './4.jpg';
import seis from './6.jpeg';

const Home = () => {
  const carouselImages = [
    { src: dos, alt: 'Dos' },
    { src: tres, alt: 'Tres' },
    { src: cuatro, alt: 'Cuatro' },
    { src: seis, alt: 'Seis' },
  ];

  return (
    <div className="home-container p-4 m-4">
      <Carousel>
        {carouselImages.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;



