import { useState, useCallback, useEffect, useRef } from 'react';
import { useSpring, config } from 'react-spring';

export const useLandingPageLogic = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [wasContactFormVisible, setWasContactFormVisible] = useState(false);
  const [isHoveringGaboBtn, setIsHoveringGaboBtn] = useState(false);
  const [isHoveringPeabodyBtn, setIsHoveringPeabodyBtn] = useState(false);
  const [isHoveringDesalambreBtn, setIsHoveringDesalambreBtn] = useState(false);
  const [showFeaturedProjects, setShowFeaturedProjects] = useState(true);
  const [fluidButtonClicked, setFluidButtonClicked] = useState(false);
  const [showBottomBar, setShowBottomBar] = useState(true);
  const [showStoryScroller, setShowStoryScroller] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [activeTopBarButton, setActiveTopBarButton] = useState('home');

  const handleClick = useCallback(() => {
    setIsOverlayVisible(false);
    setShowContactForm(false);
    setShowFeaturedProjects(false);
    setFluidButtonClicked(true);
    setActiveTopBarButton('fluid');
    setShowBottomBar(false);
    setShowStoryScroller(true);
  }, []);

  const openContactForm = useCallback(() => {
    setShowContactForm(true);
    setIsOverlayVisible(true);
    setShowFeaturedProjects(false);
    setFluidButtonClicked(false);
    setWasContactFormVisible(false);
    setActiveTopBarButton('contact');
    setShowBottomBar(!isMobileView);
  }, [isMobileView]);

  const closeContactForm = useCallback((showFeaturedProjects = false) => {
    setShowContactForm(false);
    setWasContactFormVisible(false);
    setActiveTopBarButton('home');
    if (fluidButtonClicked) {
      setIsOverlayVisible(false);
      setShowBottomBar(false);
    } else {
      setIsOverlayVisible(true);
      setShowBottomBar(!isMobileView);
    }
    if (showFeaturedProjects) {
      setShowFeaturedProjects(true);
    }
  }, [fluidButtonClicked, isMobileView]);

  const handleBottomBarButtonEnter = useCallback((button) => {
    if (!fluidButtonClicked) {
      if (showContactForm) {
        setWasContactFormVisible(true);
        setShowContactForm(false);
      }
      setShowFeaturedProjects(false);
      switch(button) {
        case 'gabo':
          setIsHoveringGaboBtn(true);
          break;
        case 'peabody':
          setIsHoveringPeabodyBtn(true);
          break;
        case 'desalambre':
          setIsHoveringDesalambreBtn(true);
          break;
      }
    }
  }, [fluidButtonClicked, showContactForm]);

  const handleBottomBarButtonLeave = useCallback(() => {
    if (!fluidButtonClicked) {
      if (wasContactFormVisible) {
        setShowContactForm(true);
        setWasContactFormVisible(false);
      } else {
        setShowFeaturedProjects(true);
      }
      setIsHoveringGaboBtn(false);
      setIsHoveringPeabodyBtn(false);
      setIsHoveringDesalambreBtn(false);
    }
  }, [fluidButtonClicked, wasContactFormVisible]);

  const overlayProps = useSpring({
    backgroundColor: isOverlayVisible ? 'rgba(0, 0, 0, 0.80)' : 'rgba(0, 0, 0, 1)',
    config: { ...config.molasses, duration: 800 }
  });

  const handleLinkedinButtonClick = useCallback(() => {
    window.open('https://www.linkedin.com/in/germanandino/', '_blank');
    setShowBottomBar(!isMobileView);
  }, [isMobileView]);

  const handleHomeButtonClick = useCallback(() => {
    setIsOverlayVisible(true);
    setShowContactForm(false);
    setShowFeaturedProjects(true);
    setFluidButtonClicked(false);
    setIsHoveringGaboBtn(false);
    setIsHoveringPeabodyBtn(false);
    setIsHoveringDesalambreBtn(false);
    setActiveTopBarButton('home');
    setShowBottomBar(!isMobileView);
  }, [isMobileView]);

  const handleDocumentButtonClick = useCallback(() => {
    // Implement your document button click logic here
    setShowBottomBar(!isMobileView);
  }, [isMobileView]);

  const closeStoryScroller = useCallback(() => {
    setShowStoryScroller(false);
    setFluidButtonClicked(false);
    handleHomeButtonClick();
  }, [handleHomeButtonClick]);

  return {
    overlayProps,
    isOverlayVisible,
    showContactForm,
    isHoveringGaboBtn,
    isHoveringPeabodyBtn,
    isHoveringDesalambreBtn,
    showFeaturedProjects,
    fluidButtonClicked,
    activeTopBarButton,
    showBottomBar,
    handleClick,
    openContactForm,
    closeContactForm,
    handleBottomBarButtonEnter,
    handleBottomBarButtonLeave,
    handleLinkedinButtonClick,
    handleHomeButtonClick,
    handleDocumentButtonClick,
    showStoryScroller,
    closeStoryScroller,
    isMobileView
  };
};