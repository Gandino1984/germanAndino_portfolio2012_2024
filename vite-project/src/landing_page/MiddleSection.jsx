import React from 'react';
import './MiddleSection.css';
import Hero from './Hero.jsx';
import SideInfoDisplay from './SideInfoDisplay.jsx';

const MiddleSection = ({ 
  isHoveringDesalambreBtn,
  isHoveringPeabodyBtn,
  isHoveringGaboBtn,
  showContactForm,
  showFeaturedProjects,
  onCloseContactForm
}) => {
  return (
    <div className='middle-section-wrapper'>
      <Hero />
      
      <SideInfoDisplay 
        isHoveringDesalambreBtn={isHoveringDesalambreBtn}
        isHoveringPeabodyBtn={isHoveringPeabodyBtn}
        isHoveringGaboBtn={isHoveringGaboBtn}
        showContactForm={showContactForm}
        showFeaturedProjects={showFeaturedProjects}
        onCloseContactForm={onCloseContactForm}
      />
    </div>
  );
};

export default MiddleSection;