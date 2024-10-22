import React, { useState, useRef, useEffect } from 'react';
import { animated, useSpring } from 'react-spring';
import './StoryScroller.css';

const StoryScroller = ({ stories, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  const [props, set] = useSpring(() => ({
    transform: 'translateX(0%)',
    config: { mass: 1, tension: 100, friction: 14 }
  }));

  useEffect(() => {
    set({ transform: `translateX(-${currentIndex * 10}%)` });
  }, [currentIndex, set]);

  const handleScroll = (direction) => {
    if (direction === 'left' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (direction === 'right' && currentIndex < stories.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="story-scroller">
      <button className="close-button" onClick={onClose}>×</button>
      <button className="scroll-button left" onClick={() => handleScroll('left')} disabled={currentIndex === 0}>
        &#8249;
      </button>
      <div className="story-container" ref={scrollRef}>
        <animated.div className="story-wrapper" style={props}>
          {stories.map((story, index) => (
            <div key={index} className="story-item">
              {story.type === 'image' ? (
                <img src={story.content} alt={`Story ${index + 1}`} />
              ) : (
                <iframe src={story.content} title={`Story ${index + 1}`} frameBorder="0" allowFullScreen />
              )}
            </div>
          ))}
        </animated.div>
      </div>
      <button className="scroll-button right" onClick={() => handleScroll('right')} disabled={currentIndex === stories.length - 1}>
        &#8250;
      </button>
    </div>
  );
};

export default StoryScroller;