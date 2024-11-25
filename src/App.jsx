import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import {LoginPage} from './pages/LoginPage/LoginPage';
import {LandingPage} from './pages/LandingPage/LandingPage';
import {MenuPage} from './pages/MenuPage/MenuPage';
import {AdminPage} from "./pages/AdminPage/AdminPage";
import CreateUserPage from "./pages/CreateUserPage/CreateUserPage";
import UpdateUserPage from "./pages/UpdateUser/UpdateUserPage";

export function App() {
    return (
        <div className="App">

            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/menu" element={<MenuPage/>}/>
                    <Route path="/admin" element={<AdminPage/>}/>
                    <Route path="/createUser" element={<CreateUserPage/>}/>
                    <Route path="/updateUser" element={<UpdateUserPage/>}/>
                </Routes>
            </Router>
        </div>
    );
}


