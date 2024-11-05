import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './Hero.css';

const Hero = () => {
  const title = "German Andino";
  const [showModal, setShowModal] = useState(false);

  const iconNames = [
    "logo-html5", "logo-css3", "logo-javascript", "logo-nodejs",
    "logo-react", "logo-npm", "logo-github", "logo-docker", "logo-tux"
  ];

  return (
    <div className="hero-wrapper">
      <h1>
        <span className="hero-title">{title}</span>
      </h1>
      <span className="hero-subtitle">
        Productor Multimedia, Artista y{' '}
        <span 
          className='hero-subtitle-highlight' 
          onMouseEnter={() => setShowModal(true)}
          onMouseLeave={() => setShowModal(false)}
        >
          Desarrollador Web
          {showModal && (
            <div className="skills-modal">
              {iconNames.map((name, index) => (
                <ion-icon key={index} name={name}></ion-icon>
              ))}
            </div>
          )}
        </span>
      </span>
    </div>
  );
};

export default Hero;