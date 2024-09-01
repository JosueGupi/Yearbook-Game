
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import { LoginPage } from './pages/LoginPage/LoginPage';
import { LandingPage } from './pages/LandingPage/LandingPage';

export function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes > 
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}


