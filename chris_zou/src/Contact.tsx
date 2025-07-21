import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

const Contact = () => {
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
    <div className="container">
      <header className="header">
        <nav>
          <div className="LOGO">
            <Link to="/">Chris Zou</Link>
          </div>
          <div className="nav-items" ref={navItemsRef}>
            <Link to="/bio">About</Link>
            <Link to="/press">Press</Link>
            <Link to="/contact">Contact</Link>
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
                href="https://letterboxd.com/chzou/"
                target="_blank"
                className="svg-wrapper letterboxd"
                rel="noopener noreferrer"
              >
                <img src="/letterboxd.svg" alt="Letterboxd" />
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
        <p className="contact">contact: <b>chzzou92@gmail.com</b></p>
      </div>
    </div>
  );
};

export default Contact; 