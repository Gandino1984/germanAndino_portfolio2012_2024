import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './Hero.css';

const Hero = () => {
  const title = "German Andino";
  const [showModal, setShowModal] = useState(false);

  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js';
  //   script.type = 'module';
  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  const [springs, api] = useSpring(() => ({
    from: { y: 0, opacity: 0 },
    to: async (next) => {
      while (true) {
        // Reset check icon
        await next({ opacity: 0 });
        // Quick drop
        await next({ y: 20, config: { tension: 300, friction: 10, mass: 1 } });
        // Bounce up
        await next({ y: -15, config: { tension: 200, friction: 10, mass: 1 } });
        // Smaller bounce down
        await next({ y: 10, config: { tension: 250, friction: 10, mass: 1 } });
        // Small bounce up
        await next({ y: -5, config: { tension: 200, friction: 10, mass: 1 } });
        // Start showing check icon 200ms before settling
        next({ opacity: 1, config: { duration: 200 } });
        // Settle
        await next({ y: 0, config: { tension: 200, friction: 10, mass: 1 } });
        // Rest
        await new Promise(resolve => setTimeout(resolve, 3000));
      }
    },
  }));

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
          // style={{
          //   display: 'inline-block',
          //   transform: springs.y.to(y => `translateY(${y}px)`)
          // }}
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