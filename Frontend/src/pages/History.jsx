import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from '@mui/material';
import '../App.css'; 

export default function HistoryComponent() {
    const { getHistoryOfUser } = useContext(AuthContext);
    const [meetings, setMeetings] = useState([]);
    const routeTo = useNavigate();

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const history = await getHistoryOfUser();
                setMeetings(history);
            } catch (error) {
                console.error("Error fetching user history:", error);
            }
        }
        fetchHistory();
    }, []);

    let formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    return (
        <div className="historyPageContainer">
            
            {/* Custom Navbar for History Page */}
            <nav className="historyNav">
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <IconButton onClick={() => routeTo("/home")} sx={{ color: "white", backgroundColor: "rgba(255,255,255,0.1)" }}>
                        <HomeIcon />
                    </IconButton>
                    <h2 style={{ margin: 0, color: "white", fontWeight: 600 }}>Apna Video Call</h2>
                </div>
            </nav>

            <div className="historyMainContainer">
                <h1 style={{ color: "white", textAlign: "center", marginBottom: "2rem", fontSize: "2.5rem" }}>
                    Meeting <span style={{ color: "#FF9839" }}>History</span>
                </h1>

                <div className="historyGrid">
                    {meetings.length !== 0 ? meetings.map((e, i) => {
                        return (
                            <Card key={i} sx={{ 
                                backgroundColor: 'rgba(255, 255, 255, 0.05)', 
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '12px',
                                color: 'white',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                paddingRight: '16px',
                                transition: 'transform 0.2s ease, border-color 0.2s ease',
                                '&:hover': {
                                    transform: 'translateY(-2px)',
                                    borderColor: '#FF9839'
                                }
                            }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 18, fontWeight: 600, color: "white" }} gutterBottom>
                                        Room Code: <span style={{ color: "#FF9839"}}>{e.meetingCode}</span>
                                    </Typography>
                                    <Typography sx={{ mb: 0, color: "rgba(255, 255, 255, 0.6)" }}>
                                        Joined on: {formatDate(e.date)}
                                    </Typography>
                                </CardContent>
                                
                                <Button 
                                    variant="outlined" 
                                    onClick={() => routeTo(`/${e.meetingCode}`)}
                                    sx={{ 
                                        borderColor: '#FF9839', 
                                        color: '#FF9839',
                                        '&:hover': {
                                            backgroundColor: '#FF9839',
                                            color: 'white',
                                            borderColor: '#FF9839'
                                        }
                                    }}
                                >
                                    Rejoin
                                </Button>
                            </Card>
                        )
                    }) : (
                        <div style={{ textAlign: "center", color: "rgba(255, 255, 255, 0.6)", marginTop: "3rem" }}>
                            <h3>No meeting history found.</h3>
                            <p>Go to the home page to start your first call!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}