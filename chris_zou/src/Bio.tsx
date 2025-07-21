import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

const Bio = () => {
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
        <div className="image-container">
          <img
            className="profilePicture"
            src="/Muted/Screenshot 2024-11-20 at 9.52.52 PM.png"
            alt="Profile Picture"
          />
          <div className="profileDescription">
            <p>Chris Zou is a filmmaker based in New Jersey.</p>
            <p>
              His work has been featured at the 
              <span className="font2"> Liu Shiming Art Foundation</span> and the AMP
              from <span className="font2">Asian American Arts Alliance.</span>
            </p>
            <p>
              His short film “Muted” has been screened at
              <span className="font2"> Toronto International Nollywood Film Festival</span>
              as well as
              <span className="font2"> Asian American International Film Festival.
              </span>
            </p>
            <p>
              Chris is in post-production of a short film, "Walk on Water",
              starring <span className="font2">Sam Li</span> and
              <span className="font2"> Ray Kam.</span>
            </p>
            <div className="bottom-line"></div>
            <p className="contact">contact: <b>chzzou92@gmail.com</b></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio; 