import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import './FluidButton.css';

const FluidButton = ({ icon, onClick }) => {

  return (
    <button 
      className={`fluid-button`}
      onClick={onClick}
      aria-label="fluid button"
    >
    
        <ion-icon name={icon}></ion-icon>
  
    </button>
  );
};

export default FluidButton;