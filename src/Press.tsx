import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

const Press = () => {
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
        <div className="mutedPictures">
          <div className="card left">
            <div className="wrapper">
              <img className="mutedPoster" src="/Muted/DSC06628 2.JPEG" alt="MutedPoster" />
              <a
                href="https://www.lsmartfund.org/post/liu-shiming-art-foundation-presents-screening-and-panel-discussion"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="press-title">Liu Shiming Art Foundation</span>
              </a>
              <a
                href="https://www.indieshortsmag.com/reviews/2025/01/muted-psychological-drama-on-coming-temporarily-undone/?utm_campaign=Email-Notification&amp;utm_medium=email&amp;utm_source=Pabbly&amp;utm_content=Review-Notification#google_vignette"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="press-title">Indie Shorts</span>
              </a>
              <a
                href="https://www.aaartsalliance.org/magazine/stories/10-short-films-exploring-the-aapi-experience-at-the-47th-aaiff"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="press-title">The AMP</span>
              </a>
              <a
                href="https://www.tapinto.net/towns/bridgewater-slash-raritan/sections/arts-and-entertainment/articles/brhs-grad-releases-new-film-with-past-inspiration"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="press-title">BReeze</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Press; 