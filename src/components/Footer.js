import React, { useState, useEffect, useCallback } from 'react';
import { FaLongArrowAltUp } from 'react-icons/fa';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: black;
  color: #ffffff;
  text-align: center;
  padding: 20px 0;
  position: relative;
`;

const BackToTopButton = styled.a`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <FooterContainer>
      <div className='row align-items-center justify-content-center Footer-bottom'>
        <p className='footer-brand'>
          &copy;{new Date().getFullYear()} | Build by Ayat Mannaa | 
        </p>
      </div>
      <BackToTopButton show={showButton} onClick={scrollToTop}>
        <FaLongArrowAltUp className='d-flex arrow'/>
      </BackToTopButton>
    </FooterContainer>
  );
}

export default Footer;
