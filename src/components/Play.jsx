import { useState, useEffect } from 'react';
import './Play.css';

const Play = () => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    // Set a target date - you can modify this to your actual release date
    // const targetDate = new Date();
    // targetDate.setMonth(targetDate.getMonth() + 3); // 3 months from now, adjust as needed
    const targetDate = new Date("January 7, 2026 12:00:00");


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
