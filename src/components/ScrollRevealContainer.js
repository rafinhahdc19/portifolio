import React, { useEffect, useRef } from 'react';

const ScrollRevealContainer = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const ScrollReveal = require('scrollreveal').default;
      ScrollReveal().reveal(containerRef.current, {
        origin: 'bottom',
        distance: '20px',
        opacity: 0,
        duration: 1000,
        delay: 0,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        reset: true,
        scale: 1,
        viewFactor: 0.1,
      });
    }
  }, []);

  return <div ref={containerRef}>{children}</div>;
};

export default ScrollRevealContainer;
