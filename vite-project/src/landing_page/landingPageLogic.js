import { useState, useCallback, useEffect, useRef } from 'react';
import { useSpring, config } from 'react-spring';

export const useLandingPageLogic = () => {

  // const [isHovering, setIsHovering] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  // const animationRef = useRef(null);
  // const startTimeRef = useRef(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [wasContactFormVisible, setWasContactFormVisible] = useState(false);
  const [isHoveringGaboBtn, setIsHoveringGaboBtn] = useState(false);
  const [isHoveringPeabodyBtn, setIsHoveringPeabodyBtn] = useState(false);
  const [isHoveringDesalambreBtn, setIsHoveringDesalambreBtn] = useState(false);
  const [showFeaturedProjects, setShowFeaturedProjects] = useState(true);
  const [fluidButtonClicked, setFluidButtonClicked] = useState(false);
  const [activeTopBarButton, setActiveTopBarButton] = useState('home');
  const [showBottomBar, setShowBottomBar] = useState(true);
  const [showStoryScroller, setShowStoryScroller] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOverlayVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // useEffect(() => {
  //   const animate = (time) => {
  //     if (!startTimeRef.current) startTimeRef.current = time;
  //     const elapsed = (time - startTimeRef.current) * 0.001;
      
  //     document.querySelectorAll('.animated-letter').forEach((el, index) => {
  //       const x = Math.sin(elapsed + index * 0.4) * 10;
  //       const y = Math.cos(elapsed + index * 0.8) * 20;
  //       el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  //     });

  //     if (isHovering) {
  //       animationRef.current = requestAnimationFrame(animate);
  //     }
  //   };

  //   if (isHovering) {
  //     startTimeRef.current = null;
  //     document.querySelectorAll('.animated-letter').forEach((el) => {
  //       el.style.transition = 'transform 0.4s ease-in';
  //     });
  //     animationRef.current = requestAnimationFrame(animate);
  //   } else {
  //     if (animationRef.current) {
  //       cancelAnimationFrame(animationRef.current);
  //     }
  //     document.querySelectorAll('.animated-letter').forEach((el) => {
  //       el.style.transition = 'transform 0.4s ease-out';
  //       el.style.transform = 'translate3d(0px, 0px, 0)';
  //     });
  //   }

  //   return () => {
  //     if (animationRef.current) {
  //       cancelAnimationFrame(animationRef.current);
  //     }
  //   };
  // }, [isHovering]);
  
  // const handleMouseEnter = useCallback(() => setIsHovering(true), []);
  
  // const handleMouseLeave = useCallback(() => setIsHovering(false), []);

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
    setShowBottomBar(true);
  }, []);

  const closeContactForm = useCallback((showFeaturedProjects = false) => {
    setShowContactForm(false);
    setWasContactFormVisible(false);
    setActiveTopBarButton('home');
    if (fluidButtonClicked) {
      setIsOverlayVisible(false);
      setShowBottomBar(false);
    } else {
      setIsOverlayVisible(true);
      setShowBottomBar(true);
    }
    if (showFeaturedProjects) {
      setShowFeaturedProjects(true);
    }
  }, [fluidButtonClicked]);

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
    setShowBottomBar(true);
  }, []);

  const handleHomeButtonClick = useCallback(() => {
    setIsOverlayVisible(true);
    setShowContactForm(false);
    setShowFeaturedProjects(true);
    setFluidButtonClicked(false);
    setIsHoveringGaboBtn(false);
    setIsHoveringPeabodyBtn(false);
    setIsHoveringDesalambreBtn(false);
    setActiveTopBarButton('home');
    setShowBottomBar(true);
  }, []);

  const handleDocumentButtonClick = useCallback(() => {
    // Implement your document button click logic here
    setShowBottomBar(true);
  }, []);

  const closeStoryScroller = useCallback(() => {
    setShowStoryScroller(false);
    setFluidButtonClicked(false);
    handleHomeButtonClick();
  }, [handleHomeButtonClick]);

  return {
    // isHovering,
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
    closeStoryScroller
  };
};