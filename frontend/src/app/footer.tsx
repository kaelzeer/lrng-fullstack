'use client'
import React, { useEffect, useState } from 'react';

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true)
    // Footer виден только при скролле до конца страницы
    // function handleScroll() {
    //   if (
    //     window.innerHeight + document.documentElement.scrollTop !==
    //     document.documentElement.offsetHeight
    //   ) {
    //     setIsVisible(false);
    //   } else {
    //     setIsVisible(true);
    //   }
    // }

    //
    // window.addEventListener('scroll', handleScroll);
    // return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className={`footer ${isVisible ? 'visible' : ''}`}>
      {/* Информация о сайте здесь */}
      © {new Date().getFullYear()} KZR TEAM.
    </footer>
  );
};

export default Footer;
