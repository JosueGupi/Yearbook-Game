
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import { LoginPage } from './pages/LoginPage/LoginPage';

export function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes > 
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}


