import './Header.css';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav id="header">
      <ul>
        <li>
          <a href="#info" onClick={(e) => { e.preventDefault(); scrollToSection('info'); }}>
            Info
          </a>
        </li>
        <li>
          <a href="#youtube" onClick={(e) => { e.preventDefault(); scrollToSection('youtube'); }}>
            YouTube
          </a>
        </li>
        <li>
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
            <img src="/TaPprofile.png" alt="TaPs pfp" />
          </a>
        </li>
        <li>
          <a href="#play" onClick={(e) => { e.preventDefault(); scrollToSection('play'); }}>
            Play
          </a>
        </li>
        <li>
          <a href="#discord" onClick={(e) => { e.preventDefault(); scrollToSection('discord'); }}>
            Discord
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;