import React from 'react';
import './MiddleSection.css';
import Hero from './Hero.jsx';
import SideInfoDisplay from './SideInfoDisplay.jsx';
import { ScreenSizeCheck } from './screenCheck';

const MiddleSection = ({ 
  isHoveringDesalambreBtn,
  isHoveringPeabodyBtn,
  isHoveringGaboBtn,
  showContactForm,
  showFeaturedProjects,
  onCloseContactForm
}) => {
  const { isMobile } = ScreenSizeCheck();

  return (
    <div className='middle-section-wrapper'>
      <Hero />
      
      {!isMobile && (
        <SideInfoDisplay 
          isHoveringDesalambreBtn={isHoveringDesalambreBtn}
          isHoveringPeabodyBtn={isHoveringPeabodyBtn}
          isHoveringGaboBtn={isHoveringGaboBtn}
          showContactForm={showContactForm}
          showFeaturedProjects={showFeaturedProjects}
          onCloseContactForm={onCloseContactForm}
        />
      )}
    </div>
  );
};

export default MiddleSection;