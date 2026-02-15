import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

const Dev = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  const navItemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    if (navItemsRef.current) {
      navItemsRef.current.classList.toggle('dark-mode', darkMode);
    }
    localStorage.setItem('darkMode', String(darkMode));
  }, [darkMode]);

  return (
    <div className="container" style={{ minHeight: '100vh' }}>
      <header className="header">
        <nav style={{ zIndex: 100, top: 0 }}>
          <div className="LOGO">
            <Link to="/">Chris Zou</Link>
          </div>
          <div className="nav-items" ref={navItemsRef}>
            <Link to="/bio">About</Link>
            <Link to="/dev">Dev</Link>
            <Link to="/press">Press</Link>
            <div id="social-media">
              <a
                href="https://www.instagram.com/chris_zou15/"
                target="_blank"
                className="svg-wrapper instagram"
                rel="noopener noreferrer"
              >
                <img src="/instagram.svg" alt="Instagram" />
              </a>
              <a
                href="https://www.imdb.com/name/nm7520916/"
                target="_blank"
                className="svg-wrapper imdb"
                rel="noopener noreferrer"
              >
                <img src="/imdb-svgrepo-com.svg" alt="IMDB" />
              </a>
              <a
                href="https://vimeo.com/basskeys"
                target="_blank"
                className="svg-wrapper vimeo"
                rel="noopener noreferrer"
              >
                <img src="/vimeo.svg" alt="Letterboxd" />
              </a>
            </div>
          </div>
        </nav>
      </header>
      <div className="portfolio">
        <div id="darkMode">
          <label className="darkButton">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={e => setDarkMode(e.target.checked)}
            />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="dev-gallery">
          <div className="dev-img-container">
            <img
              src={darkMode ? "/dev-dark-1.png" : "/dev-light-1.png"}
              alt="App Screenshot 1"
            />
          </div>
          <div className="dev-img-container">
            <img
              src={darkMode ? "/dev-dark-2.png" : "/dev-light-2.png"}
              alt="App Screenshot 2"
            />
          </div>
        </div>
        <div className="dev-link">
          <a href="https://fountainhead.site" target="_blank" rel="noopener noreferrer">
            Fountainhead.site
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dev;
