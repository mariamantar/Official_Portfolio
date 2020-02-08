import React from 'react';
import './Home.scss';
import { FaTwitterSquare, FaLinkedin } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="container">
      <main>
        <div className="button_switch_container">
          <div className="button_switch">
            <p>Ugh! LightMode? </p>
            <button>Switch to Dark Mode</button>
          </div>
        </div>
        <header className="header">
          <h2>1.0_1-MariamAntar.wav</h2>
        </header>
        <div className="content">
          <p>
            Software engineer and tech head from Sydney, Australia. I build and
            repair things. 🛠
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
          <p>Email: mariamantar1[at]hotmail.com</p>
        </div>
        <div className="social">
          <ul>
            <li>
              <a
                href="https://twitter.com/mariamantar_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitterSquare />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mariamantar/"
                target="_blank"
                rel="noopener noreferrer"
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
