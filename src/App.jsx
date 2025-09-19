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
    // Remove inline loader if present, then scroll to the hero section (#home)
    const hideLoaderAndScroll = () => {
      const loader = document.getElementById('loading-screen');
      const hero = document.getElementById('home');
      if (loader) {
        // fade-out via inline style for simplicity
        loader.style.transition = 'opacity .35s ease, transform .35s ease';
        loader.style.opacity = '0';
        loader.style.transform = 'scale(0.99)';
        setTimeout(() => {
          try { loader.remove(); } catch (e) { /* ignore */ }
          // After loader is removed, scroll to hero
          if (hero) {
            hero.scrollIntoView({ behavior: 'smooth' });
          } else {
            // fallback: scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 380);
      } else {
        if (hero) hero.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Wait a tick so initial paint can show the loader; ensures spinner visible even on fast loads
    const t = setTimeout(hideLoaderAndScroll, 60);
    return () => clearTimeout(t);
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
