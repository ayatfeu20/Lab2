import React from "react";
import NavBar2 from "./components/NavBar2";
import NavBar1 from "./components/NavBar1";
import News from "./components/News";
import LanguageBasedNews from "./components/LanguageBasedNews";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";


function App() {
  return (
    <div className="App">
      <LanguageProvider>
      <Router>
        <NavBar1 />
        <NavBar2 />
        <div className="container">
          <div className="row">
            <div className="col-md">
              <Routes>
                <Route path="/" element={<News key="general" category="general" />} />
                <Route path="/Entertainment" element={<News key="entertainment" category="entertainment" />} />
                <Route path="/Technology" element={<News key="technology" category="technology" />} />
                <Route path="/Sports" element={<News key="sports" category="sports" />} />
                <Route path="/Business" element={<News key="business" category="business" />} />
                <Route path="/Health" element={<News key="health" category="health" />} />
                <Route path="/Science" element={<News key="science" category="science" />} />
                <Route path="/" element={<LanguageBasedNews />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
      </LanguageProvider>
    </div>
  );
}

export default App;
