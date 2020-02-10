import React, { useState, useEffect } from 'react';
import storage from 'local-storage-fallback';
import './Home.scss';
import { FaTwitterSquare, FaLinkedin } from 'react-icons/fa';
import trollface from './trollface.svg';

const Home = () => {
  const [hidden, isHidden] = useState(false);
  const [switchOn, isSwitchOn] = useState(
    localStorage.getItem('switchOn') === 'true'
  );

  useEffect(() => {
    storage.setItem('switchOn', switchOn);
  }, [switchOn]);

  return (
    <div className={!switchOn ? 'container lightmode' : 'container darkmode'}>
      <main>
        <div className="button_switch_container">
          <div className="button_switch">
            {!switchOn ? <p>Ugh! LightMode? </p> : <p>That's Better!</p>}
            <button onClick={() => isSwitchOn(!switchOn)}>
              {!switchOn ? (
                <p>Switch to Dark Mode</p>
              ) : (
                <p>Switch to Light Mode</p>
              )}
            </button>
          </div>
        </div>
        <header className="header">
          <h2>1.0_1-MariamAntar.mov</h2>
        </header>
        <div className="content">
          <p>
            Software engineer and tech head from Sydney, Australia. I build and
            repair things.
          </p>
          <p>
            I currently work at{' '}
            <span>
              <a
                href="https://www.hireup.com.au/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hireup
              </a>
            </span>
            , an online platform helping people seeking support.
          </p>
        </div>
        <div className="portfolio-pic">
          <button onClick={() => isHidden(!hidden)}>
            Click to view selfie
          </button>
          {hidden && (
            <div className="trollface-pic">
              <img className="svg" alt="troll face" src={trollface} />
            </div>
          )}
        </div>

        <div>
          <h2>1.0_2-Work.mp3</h2>
          <div className="work">
            <ul>
              <li>
                Check out my projects on{' '}
                <span>
                  <a
                    href="https://github.com/mariamantar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github
                  </a>
                </span>
              </li>
              <li>
                Read my blogposts on{' '}
                <span>
                  <a
                    href="https://dev.to/mariamantar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dev.to
                  </a>
                </span>
              </li>
              <li>
                Watch my videos on{' '}
                <span>
                  <a
                    href="https://www.youtube.com/channel/UC4luHbFfHOuMCcQM4TKZNTw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    youtube
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="contact">
          <h2>1.0_3-Contact.sd</h2>
          <p>
            Email: mariamantar1[at]
            <span role="img" aria-label="hot">
              🔥
            </span>
            mail.com
          </p>
        </div>
        <div className="social">
          <ul>
            <li>
              <a
                href="https://twitter.com/mariamantar_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="twitter"
              >
                <FaTwitterSquare />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mariamantar/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Home;
