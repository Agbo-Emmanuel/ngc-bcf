import React, { useRef } from 'react';


export const ScrollToAboutUs = ({ scrollToId }) => {

  const buttonRef = useRef(null);

  const handleClick = () => {
    if (buttonRef.current) {
      const targetElement = document.getElementById(scrollToId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div ref={buttonRef} onClick={handleClick}>
        <nav className='cursor-pointer hover:text-[blue]'>About Us</nav>
    </div>
  );
};

export const ScrollToBCA = ({ scrollToId }) => {

  const buttonRef = useRef(null);

  const handleClick = () => {
    if (buttonRef.current) {
      const targetElement = document.getElementById(scrollToId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div ref={buttonRef} onClick={handleClick}>
        <nav className='cursor-pointer hover:text-[blue]'>NGC 2024</nav>
    </div>
  );
};

export const ScrollToWorshipWithUs = ({ scrollToId }) => {

  const buttonRef = useRef(null);

  const handleClick = () => {
    if (buttonRef.current) {
      const targetElement = document.getElementById(scrollToId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div ref={buttonRef} onClick={handleClick}>
        <nav className='cursor-pointer hover:text-[blue]'>Worship with Us</nav>
    </div>
  );
};
