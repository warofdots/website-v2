import './Discord.css';

const Discord = () => {
  return (
    <div id="discord" className="section background2 discord-section">
      <div className="container">
        <div className="discord-content">
          <div className="discord-text">
            <h1>War of Dots DISCORD</h1>
            <ul>
              <li><strong>Weekly Gamenights:</strong> Get with the community and the game.</li>
              <li><strong>Live Showcases:</strong> See other players play and watch the game grow.</li>
              <li><strong>Active Community:</strong> Cool people all around the world.</li>
            </ul>
            <a 
              href="https://discord.gg/warofdots" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-button"
            >
              Join Discord
            </a>
          </div>
          <div className="discord-image">
            <img src="/discord2.png" alt="Discord Community Poster" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discord;