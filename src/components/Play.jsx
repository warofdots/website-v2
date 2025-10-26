import { useState, useEffect } from 'react';
import './Play.css';

const Play = () => {
  const [timeLeft, setTimeLeft] = useState('');

  // this fix is made by thalanas110 
  useEffect(() => {
    // Set a fixed target date for March 20, 2026. To change, change the date in YYYY-MM-DD format.
    const targetDate = new Date('2026-03-20T00:00:00');

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      } else {
        setTimeLeft('AVAILABLE NOW!');
      }
    };

    updateCountdown(); // Initial call
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleDonateClick = () => {
    window.open('https://buymeacoffee.com/pythonic_tea', '_blank');
  };

  return (
    <div id="play" className="section white-section">
      <div className="container">
        <h1>Release Estimated in:</h1>
        <br />
        <div id="countdown" className="countdown">
          {timeLeft}
        </div>
        <br />
        <button className="donate" onClick={handleDonateClick}>
          <span>BOOST Development</span>
        </button>
      </div>
    </div>
  );
};

export default Play;
