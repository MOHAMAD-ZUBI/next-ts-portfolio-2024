"use client"
import React, { useEffect, useState } from 'react'

interface AnimatedSectionProps {
    id: string;
    children: React.ReactNode;
  }

  const AnimatedSection: React.FC<AnimatedSectionProps> = ({ id, children }) => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionHeight = rect.height;
          const viewportHeight = window.innerHeight;
          const top = rect.top;
          const isVisible = top >= -(0.7 * sectionHeight) && top <= viewportHeight - (0.3 * sectionHeight);
          setIsVisible(isVisible);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check visibility when component mounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [id]);
  
    return (
      <div
        id={id}
        className={`section max-md:transition-all ease-in-out duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-10'
        }`}
      >
        {children}
      </div>
    );
  };
  export default AnimatedSection;