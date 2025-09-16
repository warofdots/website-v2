import './Info.css';

const Info = () => {
  return (
    <div id="info" className="section white-section">
      <div className="container">
        <h2>What is War of Dots?</h2>
        <p>War of Dots is a strategic multiplayer game where every move matters. Command your armies in real-time battles across dynamic maps: capture territory, control resources, and conquer your rivals.</p>

        <ul>
          <li><strong>1. Dominate the Map:</strong> Break enemy lines and take control of key cities. The more you own, the stronger you grow.</li>
          <li><strong>2. Live Tactical Combat:</strong> Engage in live, high-stakes battles. Think fast, adapt faster. Your decisions in the heat of the moment determine whether you rise or fall.</li>
          <li><strong>3. Master Resource Management:</strong> Stockpile resources or upgrade your troops. Outmaneuver your opponents not just with force, but with cunning strategy.</li>
          <li><strong>4. Special Events:</strong> limited-time challenges and map-altering events will make your War of Dots experience truly interesting.</li>
        </ul>
        <h3>Think you can rise above the chaos and outsmart the rest? The battle's waiting.</h3>

        <div className="dots-container">
          <img src="/blue.png" alt="Blue" className="dot" />
          <img src="/red.png" alt="Red" className="dot" />
        </div>
      </div>
    </div>
  );
};

export default Info;