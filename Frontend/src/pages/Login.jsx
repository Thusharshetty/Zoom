import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import axios from "axios";
import Navbar from "./Navbar";
import PersonAddAltTwoToneIcon from '@mui/icons-material/PersonAddAltTwoTone';
import LockClockTwoToneIcon from '@mui/icons-material/LockClockTwoTone';

export default function Login() {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        if (error) setError(''); // Clear error when user starts typing
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const payload = {
                username: formData.username,
                password: formData.password
            };
            const response = await axios.post("https://apna-video-backend.onrender.com/api/users/login", payload);
            localStorage.setItem("token", response.data.token);
            navigate('/home');
        } catch (error) {
            setError(error.response?.data?.message || "An error occurred while logging in.");
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className="landingPageContainer">
            <Navbar />
            <div className="authMainContainer">
                <div className="authLeft">
                    <h1><span style={{ color: "#FF9839" }}>Login</span> to Your Account</h1>
                    <form className="authFormBox" onSubmit={handleSubmit}>
                        {error && <div className="errorMessage">{error}</div>}
                        <div className="inputGroup">
                            <span className="inputIcon"><PersonAddAltTwoToneIcon /></span>
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
                        <button type="submit" className="authSubmitBtn" disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
                        <p className="authSwitch">
                            Don't have an account? <Link to="/register">Register</Link>
                        </p>
                    </form>
                </div>
                <div className="authRight">
                   <div className="themedImageContainer">
                        <img src="/user.jpg" alt="Video Call App Preview" />
                    </div>
                </div>
            </div>

        </div>
    )
}       