import { useEffect, useRef, useState } from 'react';
import './YouTube.css';

// image paths (public/ folder) - module scope so hooks don't need to include this in deps
const images = [
  '/image1.png',
  '/image2.png',
  '/image3.png',
  '/image4.png',
  '/image5.png',
  '/image6.png',
  '/image7.png',
];

const YouTube = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ytWrapperRef = useRef(null);

  useEffect(() => {
    const node = ytWrapperRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, 100);
            if (node) observer.unobserve(node);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setBgIndex((i) => (i + 1) % images.length);
    }, 6000); // change every 6s

    return () => clearInterval(id);
  }, []);

  return (
    <div id="youtube" className="section background2">
      {/* background slider layers */}
      <div className="bg-slider" aria-hidden>
        {images.map((src, i) => (
          <div
            key={src}
            className={`bg-image ${i === bgIndex ? 'visible' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>

      <div className="container">
        <div className="youtube-content">
          <div 
            ref={ytWrapperRef} 
            className={`yt-wrapper ${isVisible ? 'visible' : ''}`}
          >
            <div className="video-container">
              <iframe 
                className="yt-embed" 
                src="https://www.youtube.com/embed/11C3NRdxC2c" 
                frameBorder="0" 
                allowFullScreen
                title="War of Dots YouTube Video"
              />
            </div>
          </div>
          
          <div className="youtube-actions">
            <a 
              href="https://www.youtube.com/@TeaAndPython" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-button"
            >
              View Channel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTube;