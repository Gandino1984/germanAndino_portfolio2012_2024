import React from 'react';
import { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import './ContactButton.css';


const ContactButton = ({ icon, isActive, onClick }) => {


  return (
    <button 
      className={`contact-button`}
      onClick={onClick}
      aria-label="contact button"
    >
      
        <ion-icon name={icon}></ion-icon>
    </button>
  );
};

export default ContactButton;