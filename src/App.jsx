import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Info from './components/Info';
import YouTube from './components/YouTube';
import Play from './components/Play';
import Discord from './components/Discord';
import Footer from './components/Footer';
import './App.css';
import './mobile-enhancements.css';

function App() {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Info />
      <YouTube />
      <Play />
      <Discord />
      <Footer />
    </div>
  );
}

export default App;
