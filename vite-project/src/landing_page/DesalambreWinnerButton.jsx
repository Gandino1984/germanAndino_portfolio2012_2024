import React from 'react';
import './DesalambreWinnerButton.css';
import desalambreButtonThumb from '/src/assets/images/IpremiosDesalambre.jpg';

const DesalambreWinnerButton = ({ onMouseEnter, onMouseLeave }) => {
  const handleClick = () => {
    window.open('https://www.revista5w.com/newsroom/tierra-sin-ellas-premio-desalambre-2019-8001', '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      style={{backgroundImage: `url(${desalambreButtonThumb})`}}
      className="desalambre-festival-button" 
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      
      aria-label="Desalambre Festival Innovation Award"
    />
  );
};

export default DesalambreWinnerButton;