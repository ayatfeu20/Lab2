import React from 'react';
import NavBar2 from './components/NavBar2';
import NavBar1 from './components/NavBar1';
import News from './components/News';
import LanguageBasedNews from './components/LanguageBasedNews';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Footer from './components/Footer';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import Weather from './components/Weather';
import CurrencyRate from './components/CurrencyRate';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
`;

const CardWrapper = styled.div`
  margin: 0 40px;
`;

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LanguageProvider>
          <div className="App">
            <Router>
              <NavBar1 theme={theme} />
              <NavBar2 theme={theme} />

              <Container>
                <CardWrapper>
                  <Weather />
                </CardWrapper>
                <CardWrapper>
                  <CurrencyRate />
                </CardWrapper>
              </Container>

              <div className="container">
                <div className="row">
                  <div className="col-md">
                    <Routes>
                      <Route
                        path="/"
                        element={<News key="general" category="general" />}
                      />
                      <Route
                        path="/Entertainment"
                        element={
                          <News key="entertainment" category="entertainment" />
                        }
                      />
                      <Route
                        path="/Technology"
                        element={
                          <News key="technology" category="technology" />
                        }
                      />
                      <Route
                        path="/Sports"
                        element={<News key="sports" category="sports" />}
                      />
                      <Route
                        path="/Business"
                        element={<News key="business" category="business" />}
                      />
                      <Route
                        path="/Health"
                        element={<News key="health" category="health" />}
                      />
                      <Route
                        path="/Science"
                        element={<News key="science" category="science" />}
                      />
                      <Route path="/" element={<LanguageBasedNews />} />
                    </Routes>
                  </div>
                </div>
              </div>
              <Footer />
            </Router>
          </div>
        </LanguageProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
