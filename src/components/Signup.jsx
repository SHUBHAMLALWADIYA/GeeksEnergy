import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        password: '',
        email: '',
        phone: '',
        profession: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('userData', JSON.stringify(formData));
        navigate('/login');
    };

    return (
        <div className="form-container">
            <h2>Signup</h2>
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
                <label>
                    Email:
                    <br />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label>
                    Phone:
                    <br />
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
                </label>
                <label>
                    Profession:
                    <select name="profession" value={formData.profession} onChange={handleChange} required>
                        <option value="">Select Profession</option>
                        <option value="Developer">Developer</option>
                        <option value="Designer">Designer</option>
                        <option value="Manager">Manager</option>
                        <option value="Other">Other</option>
                    </select>
                </label>
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
