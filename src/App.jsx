import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import CompanyInfo from './components/CompanyInfo';
import './styles/styles.css';


const App = () => {
    return (
        <Router>
            <nav>
                <Link to="/signup">Signup</Link>
                <Link to="/login">Login</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/company-info">Company Info</Link>
            </nav>
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/company-info" element={<CompanyInfo />} />
                <Route path="/" element={<Signup />} />
            </Routes>
        </Router>
    );
};

export default App;
