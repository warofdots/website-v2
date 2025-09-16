import { useEffect, useRef, useState } from 'react';
import './YouTube.css';

const YouTube = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ytWrapperRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, 100);
            observer.unobserve(ytWrapperRef.current);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ytWrapperRef.current) {
      observer.observe(ytWrapperRef.current);
    }

    return () => {
      if (ytWrapperRef.current) {
        observer.unobserve(ytWrapperRef.current);
      }
    };
  }, []);

  return (
    <div id="youtube" className="section background2">
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