import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./index.css"

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/admin-dashboard');
    }

    return (
        <div className="admin-container">
            <h2 className="admin-form-heading">Admin Login</h2>
            <form onSubmit={handleSubmit} className="form-container">
                <div>
                    <label htmlFor="username" className="form-label">Username:</label> <br />
                    <input 
                        type="text" 
                        id="username" 
                        className="input-element"
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="password" className="form-label">Password:</label> <br />
                    <input 
                        type="password" 
                        id="password" 
                        className="input-element"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <button type="submit" className="form-btn">Login</button>
                </div>
            </form>
        </div>
    );
};

export default AdminLogin;
