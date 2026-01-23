import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

const VIDEO_START_TIME = 6;
const VIDEO_LOOP_DURATION = 13000;

const Index = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  const navItemsRef = useRef<HTMLDivElement>(null);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const walkOnWaterIframeRef = useRef<HTMLIFrameElement>(null);
  const walkOnWaterIntervalRef = useRef<number | null>(null);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    if (navItemsRef.current) {
      navItemsRef.current.classList.toggle('dark-mode', darkMode);
    }
    localStorage.setItem('darkMode', String(darkMode));
  }, [darkMode]);

  // Muted/Score video replay logic
  useEffect(() => {
    const videos = [video1Ref.current, video2Ref.current];
    const timeouts: number[] = [];

    function restartVideo(v: HTMLVideoElement | null) {
      if (v) {
        v.pause();
        v.currentTime = VIDEO_START_TIME;
        v.play();
      }
    }

    videos.forEach((video) => {
      if (video) {
        video.onplay = () => {
          video.currentTime = VIDEO_START_TIME;
          const timeout = setTimeout(() => restartVideo(video), VIDEO_LOOP_DURATION);
          timeouts.push(timeout);
        };
      }
    });

    return () => {
      // Clean up timeouts and event handlers
      timeouts.forEach(clearTimeout);
      videos.forEach((video) => {
        if (video) video.onplay = null;
      });
    };
  }, []);

  // Walk on Water YouTube looping logic
  useEffect(() => {
    // Only run if iframe is present
    if (!walkOnWaterIframeRef.current) return;
    // YouTube embed API for looping after 30s
    // We reload the iframe with start=0 when 30s is reached
    function loopYouTube() {
      if (walkOnWaterIframeRef.current) {
        walkOnWaterIframeRef.current.contentWindow?.postMessage('{"event":"command","func":"seekTo","args":[0, true]}', '*');
      }
    }
    // Set up interval to loop every 30s
    walkOnWaterIntervalRef.current = window.setInterval(loopYouTube, 30000);
    return () => {
      if (walkOnWaterIntervalRef.current) {
        clearInterval(walkOnWaterIntervalRef.current);
      }
    };
  }, []);

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
        <div
          className="videoContainer hide-scrollbar"
          style={{ flexDirection: 'column', overflowY: 'auto' }}
        >
          {/* Walk on Water (2025) - YouTube Embed */}
          <a
            href="https://walkonwater.vercel.app/"
            className="video-link first-video-link"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block' }}
          >
            <div className="iframe-wrapper" style={{ width: 350, height: 197, borderRadius: 0, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <iframe
                ref={walkOnWaterIframeRef}
                id="walkOnWaterVideo"
                width="350"
                height="197"
                src="https://www.youtube.com/embed/sBhGiZyZSKA?enablejsapi=1&start=0&autoplay=1&mute=1&controls=1"
                title="Walk on Water (2025)"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={{ borderRadius: 8 }}
              ></iframe>
              <div className="iframe-overlay"></div>
            </div>
            <p id="videoTitle" style={{ textAlign: 'center', width: 350, margin: '8px auto 0 auto', display: 'block' }}>Walk on Water (2025)</p>
            <div className="overlay"></div>
          </a>
          {/* Muted (2024) */}
          <a
            href="https://www.youtube.com/watch?v=gHQDSLDaC8I"
            className="video-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="video-wrapper">
              <video ref={video1Ref} id="previewVideo1" autoPlay muted width={350}>
                <source src="/muted_aaiff_trailer (1080p).mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="iframe-overlay"></div>
            </div>
            <p id="videoTitle">Muted (2024)</p>
            <div className="overlay"></div>
          </a>
          {/* Score (2023) */}
          <a
            href="https://www.youtube.com/watch?v=A1boVpPcljE"
            className="video-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="video-wrapper">
              <video ref={video2Ref} id="previewVideo2" autoPlay muted width={350}>
                <source src="/videoplayback (1).mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="iframe-overlay"></div>
            </div>
            <p id="videoTitle">Score (2023)</p>
            <div className="overlay"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index; 