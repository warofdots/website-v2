import { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isShowing, setIsShowing] = useState(true);

  const images = [
    'image1.png', 'image2.png', 'image3.png', 'image4.png',
    'image5.png', 'image6.png', 'image7.png'
  ];

  useEffect(() => {
    // Initialize with first image visible
    const fadeElementA = document.querySelector('.fade-bg-a');
    const fadeElementB = document.querySelector('.fade-bg-b');
    
    if (fadeElementA) {
      fadeElementA.style.backgroundImage = `url(/${images[0]})`;
      fadeElementA.style.opacity = '1';
    }
    if (fadeElementB) {
      fadeElementB.style.backgroundImage = `url(/${images[1]})`;
      fadeElementB.style.opacity = '0';
    }

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsShowing(prev => !prev);
    }, 10000);

    return () => clearInterval(interval);
  }, [images]);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY * 0.50;
      const fadeElements = document.querySelectorAll('.fade-bg');
      fadeElements.forEach(el => {
        el.style.backgroundPosition = `center ${offset}px`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="home" className="section background1">
      <div 
        className={`fade-bg fade-bg-a ${isShowing ? 'visible' : 'hidden'}`}
        style={{ backgroundImage: `url(/${images[currentImageIndex]})` }}
      />
      <div 
        className={`fade-bg fade-bg-b ${!isShowing ? 'visible' : 'hidden'}`}
        style={{ backgroundImage: `url(/${images[(currentImageIndex + 1) % images.length]})` }}
      />
      <div className="container">
        <h1 className="title">WAR OF DOTS</h1>
      </div>
    </div>
  );
};

export default Hero;