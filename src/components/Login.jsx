import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css';
import { LoginlogoutContext } from '../context/LoginlogoutContext.jsx';

const Login = () => {
    const [formData, setFormData] = useState({
        name: '',
        password: ''
    });
    const {login,setLogin}=useContext(LoginlogoutContext)

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const storedData = JSON.parse(localStorage.getItem('userData'));

        if (storedData && storedData.name === formData.name && storedData.password === formData.password) {
            setLogin(true)
            navigate('/dashboard');
        } else {
            setLogin(false)
            alert('Invalid Credentials');
        }
    };

    return (
        <div className="form-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <br />
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <label>
                    Password:
                    <br />
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
