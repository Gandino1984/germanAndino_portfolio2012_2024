import React, { useEffect, useState } from 'react';
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if viewport is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 720);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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