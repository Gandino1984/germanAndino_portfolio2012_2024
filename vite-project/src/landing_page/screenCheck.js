import { useState, useCallback, useEffect, useRef } from 'react';

export const ScreenSizeCheck = () => {

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
    
 return {
    isMobile
  };
};