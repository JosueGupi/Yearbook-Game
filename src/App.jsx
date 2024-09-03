
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import { LoginPage } from './pages/LoginPage/LoginPage';
import { LandingPage } from './pages/LandingPage/LandingPage';
import { MenuPage } from './pages/MenuPage/MenuPage';

export function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes > 
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </Router>
    </div>
  );
}


