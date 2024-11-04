import React from 'react';
// import { animated } from 'react-spring';
import './LandingPage.css';
import TopBar from './TopBar.jsx';
import MiddleSection from './MiddleSection.jsx';
import BottomBar from './BottomBar.jsx';
import { useLandingPageLogic } from './landingPageLogic';
import bgVideoLanding from '/src/assets/video/elHeroeSenegalesExtract.mp4'
import StoryScroller from '../story_scroller/StoryScroller.jsx'; 
import stories from '../story_scroller/stories.js';

const LandingPage = () => {
  const {
    showContactForm,
    isHoveringGaboBtn,
    isHoveringPeabodyBtn,
    isHoveringDesalambreBtn,
    showFeaturedProjects,
    fluidButtonClicked,
    handleClick,
    openContactForm,
    closeContactForm,
    handleBottomBarButtonEnter,
    handleBottomBarButtonLeave,
    handleLinkedinButtonClick,
    handleHomeButtonClick,
    handleDocumentButtonClick,
    overlayProps,
    activeTopBarButton,
    showBottomBar,
    showStoryScroller,
    closeStoryScroller,
  } = useLandingPageLogic();



  return (
    <div className="landing-page">    
        <video autoPlay loop muted className="background-video">
          <source src={bgVideoLanding} />
          Your browser does not support the video tag.
        </video>

        <div className="landing-page-wrapper" style={overlayProps}>
            <TopBar 
              onHomeButtonClick={handleHomeButtonClick}
              onFluidButtonClick={handleClick}
              onContactButtonClick={openContactForm}
              onLinkedinButtonClick={handleLinkedinButtonClick}
              activeButton={activeTopBarButton}
              onDocumentButtonClick={handleDocumentButtonClick}
            />
            {showStoryScroller ? (
              <StoryScroller stories={stories} onClose={closeStoryScroller} />
            ) : (
              <MiddleSection 
                isHoveringDesalambreBtn={isHoveringDesalambreBtn}
                isHoveringPeabodyBtn={isHoveringPeabodyBtn}
                isHoveringGaboBtn={isHoveringGaboBtn}
                showContactForm={showContactForm}
                showFeaturedProjects={showFeaturedProjects && !fluidButtonClicked}
                onCloseContactForm={closeContactForm}
              />
            )}
            {showBottomBar && (
              <BottomBar 
                onDesalambreEnter={() => handleBottomBarButtonEnter('desalambre')}
                onDesalambreLeave={handleBottomBarButtonLeave}
                onPeabodyEnter={() => handleBottomBarButtonEnter('peabody')}
                onPeabodyLeave={handleBottomBarButtonLeave}
                onGaboEnter={() => handleBottomBarButtonEnter('gabo')}
                onGaboLeave={handleBottomBarButtonLeave}
              />
            )}
        </div>
    </div>
  );
};

export default LandingPage;