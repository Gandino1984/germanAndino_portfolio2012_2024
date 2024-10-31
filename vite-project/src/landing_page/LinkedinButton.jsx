import React from 'react';
import './LinkedinButton.css';

const LinkedinButton = ({ icon, onClick }) => {

  return (
    <button 
      className={`linkedin-button`}
      onClick={onClick}
      aria-label="linkedin button"
    > 
        <ion-icon name={icon}></ion-icon> 
    </button>
  );
};

export default LinkedinButton;