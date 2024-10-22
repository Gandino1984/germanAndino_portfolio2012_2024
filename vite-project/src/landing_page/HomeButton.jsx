import React from 'react';
import { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import './HomeButton.css';


const HomeButton = ({ icon, isActive, onClick }) => {

  const [isHovered, setIsHovered] = useState(false);

  const buttonSpring = useSpring({
    transform: isActive ? 'scale(1.2)' : 'scale(1)',
    backgroundColor: isActive ? 'var(--purple)' : (isHovered ? 'black' : 'var(--gray)'),
    borderColor: isHovered && !isActive ? 'var(--purple)' : 'transparent',
    borderWidth: '2px',
    borderStyle: 'solid',
    config: config.gentle
  });

  const iconSpring = useSpring({
    color: isActive ? 'white' : (isHovered ? 'var(--purple)' : 'inherit'),
  });

  return (
    <animated.button 
      className={`home-button ${isActive ? 'active' : ''}`}
      style={buttonSpring}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="home button"
    >
      <animated.div style={iconSpring}>
        <ion-icon name={icon}></ion-icon>
      </animated.div>
    </animated.button>
  );
};

export default HomeButton;