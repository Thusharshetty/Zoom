import React, { useContext, useState } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom'
import "../App.css";
import { Button, IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';

function HomeComponent() {
    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");
    const { addToUserHistory } = useContext(AuthContext);

    // Join an existing meeting
    let handleJoinVideoCall = async () => {
        if(!meetingCode) {
            alert("Please enter a meeting code");
            return;
        }
        await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)
    }

    // Generate a random code to start a new meeting
    let handleStartNewMeeting = async () => {
        const randomCode = Math.random().toString(36).substring(2, 10);
        await addToUserHistory(randomCode);
        window.localStorage.setItem("current_meeting_code", randomCode);
        navigate(`/${randomCode}`);
    }

    return (
        <div className="homePageContainer">
            <nav>
                <div className='navHeader'>
                    <h2>Apna Video Call</h2>
                </div>

                <div className='navList' style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                   <Button 
                        startIcon={<RestoreIcon />} 
                        onClick={() => navigate("/history")} 
                        style={{ 
                            color: "white", 
                            textTransform: "none",
                            fontSize: "1.05rem" 
                        }}
                    >
                        History
                    </Button>

                    <Button 
                        onClick={() => {
                            localStorage.removeItem("token")
                            navigate("/login")
                        }}
                        style={{ color: "#FF9839", fontWeight: "600", marginLeft: "1rem" }}
                    >
                        Logout
                    </Button>
                </div>
            </nav>

            <div className="homeMainContainer">
                <div className="homeLeftPanel">
                    <h1><span style={{ color: "#FF9839" }}>Premium</span> Video Meetings.<br />Now Free for Everyone.</h1>
                    <p style={{ fontSize: "1.2rem", color: "rgba(255, 255, 255, 0.7)", marginBottom: "2rem" }}>
                        Connect, collaborate, and celebrate from anywhere with Apna Video Call.
                    </p>

                    <div className="actionBox">
                        <Button 
                            onClick={handleStartNewMeeting} 
                            variant='contained'
                            style={{ 
                                backgroundColor: "#D97500", 
                                color: "white", 
                                padding: "0.8rem 1.6rem", 
                                fontSize: "1rem",
                                fontWeight: "600",
                                borderRadius: "8px",
                            }}
                        >
                            New Meeting
                        </Button>
                        
                        <div className="divider">OR</div>

                        <div style={{ display: 'flex', gap: "10px", width: "100%", maxWidth: "400px" }}>
                            <TextField 
                                onChange={e => setMeetingCode(e.target.value)} 
                                id="outlined-basic" 
                                label="Enter a code" 
                                variant="outlined" 
                                fullWidth
                                sx={{
                                    input: { color: 'white' },
                                    label: { color: 'rgba(255, 255, 255, 0.7)' },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.4)' },
                                        '&:hover fieldset': { borderColor: '#FF9839' },
                                        '&.Mui-focused fieldset': { borderColor: '#FF9839' },
                                    }
                                }}
                            />
                            <Button 
                                onClick={handleJoinVideoCall} 
                                variant='outlined'
                                disabled={!meetingCode}
                                style={{ 
                                    borderColor: meetingCode ? "#FF9839" : "rgba(255, 255, 255, 0.2)", 
                                    color: meetingCode ? "#FF9839" : "rgba(255, 255, 255, 0.3)", 
                                    padding: "0 2rem", 
                                    fontWeight: "600",
                                    borderRadius: "8px",
                                }}
                            >
                                Join
                            </Button>
                        </div>
                    </div>
                </div>

                <div className='homeRightPanel'>
                   
                    <img src='/logo.jpg' alt="Video Conference Illustration" />
                </div>
            </div>
        </div>
    )
}

export default withAuth(HomeComponent)