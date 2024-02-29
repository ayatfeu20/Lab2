import React from 'react';
import NavBar2 from './NavBar2';
import News from './News';
import { LanguageProvider } from '../contexts/LanguageContext';

function LanguageBasedNews() {
  return (
    <LanguageProvider>
      <div>
        <NavBar2 />
        <News />
      </div>
    </LanguageProvider>
  );
}

export default LanguageBasedNews;
