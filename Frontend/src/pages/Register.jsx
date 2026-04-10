import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import PersonAddAltTwoToneIcon from '@mui/icons-material/PersonAddAltTwoTone';
import LockClockTwoToneIcon from '@mui/icons-material/LockClockTwoTone';
import PersonPinTwoToneIcon from '@mui/icons-material/PersonPinTwoTone';
import PasswordTwoToneIcon from '@mui/icons-material/PasswordTwoTone';
import Navbar from './Navbar';

export default function Register() {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: '',
    });

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (error) setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const payload = {
                name: formData.name,
                username: formData.username,
                password: formData.password
            };
            const response = await axios.post("https://apna-video-backend.onrender.com/api/users/register", payload);
            navigate("/login");
            console.log(response.data);
        } catch (error) {
            setError(error.response?.data?.message || "An error occurred while registering.");
        } finally {
            setLoading(false);
        }

        console.log("Register submitted:", formData);
    };

    return (
        <div className="landingPageContainer">
            <Navbar />

            <div className="authMainContainer">
                <div className="authLeft">
                    <h1><span style={{ color: "#FF9839" }}>Create</span> Your Account</h1>

                    <form className="authFormBox" onSubmit={handleSubmit}>
                        {error && <div className="errorMessage">{error}</div>}
                        <div className="inputGroup">
                            <span className="inputIcon"><PersonAddAltTwoToneIcon /></span>
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="inputGroup">
                            <span className="inputIcon"><PersonPinTwoToneIcon /></span>
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="inputGroup">
                            <span className="inputIcon"><LockClockTwoToneIcon /></span>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="authSubmitBtn" style={{ marginTop: '2rem' }} disabled={loading}>{loading ? "Creating Account..." : "Create Account"}</button>

                        <p className="authSwitch">
                            Already have an account? <Link to="/login">Login</Link>
                        </p>
                    </form>
                </div>

                <div className='authRight'>
                    <div className="themedImageContainer">
                        <img src="/user.jpg" alt="Video Call App Preview" />
                    </div>
                </div>
            </div>
        </div>
    );
}