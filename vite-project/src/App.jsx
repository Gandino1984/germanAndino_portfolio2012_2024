import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './landing_page/LandingPage';
import './App.css';

const App = () => {
  
  return (  
      <div className="app">
          <Routes>
              <Route path="/" element={<LandingPage />} />
              {/* Add other routes as needed */}
              
          </Routes>
      </div>
  );
};

export default App;
