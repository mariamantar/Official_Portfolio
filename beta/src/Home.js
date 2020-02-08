import React from 'react';
import './Home.scss';

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
            I am a software engineer from Sydney, Australia.
            djhbfjsbjfbjdfbsfjsb
          </p>
          <p>I work at hireup</p>
        </div>
        <div>
          <h2>1.0_2-Work.mp3</h2>
          <div className="work">
            <ul>
              <li>Check out my project here on github</li>
              <li>Some of my blogposts</li>
              <li>View some of my repairs and more on youtube</li>
            </ul>
          </div>
        </div>
        <div className="contact">
          <h2>1.0_3-Contact.sd</h2>
          <p>Email: mariamantar1[at]hotmail.com</p>
        </div>
      </main>
    </div>
  );
};

export default Home;
