<div align="center">

#  Apna Video Call

### Real-Time Video Conferencing Platform

**A full-stack MERN application for seamless video meetings — create secure rooms, chat live, share screens, and track your meeting history, all wrapped in a premium glassmorphism dark UI.**

[![Live Demo](https://img.shields.io/badge/🚀%20Live%20Demo-Vercel-black?style=for-the-badge)](https://apna-video-call-ivory.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/Thusharshetty/apna-video-app)

![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat-square&logo=mongodb&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=flat-square&logo=socket.io&logoColor=white)
![WebRTC](https://img.shields.io/badge/WebRTC-333333?style=flat-square&logo=webrtc&logoColor=white)
![Material UI](https://img.shields.io/badge/MUI-0081CB?style=flat-square&logo=mui&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

</div>

---

##  Screenshots

> **Landing & Authentication — Premium dark theme with glassmorphism design**

![Landing Page](<img width="1917" height="1027" alt="image" src="https://github.com/user-attachments/assets/a2e8cdbc-0390-47e1-90fa-e74552adf06b" />)

> **Home Dashboard — Start new meetings or join existing ones**

![Home Dashboard](https://via.placeholder.com/1000x500.png?text=Add+Dashboard+Screenshot+Here)

> **Live Video Room — WebRTC video streams, live chat, and room controls**

![Video Room](https://via.placeholder.com/1000x500.png?text=Add+Video+Room+Screenshot+Here)

---

##  Features

| Feature | Description |
|---|---|
|  **Real-Time Video & Audio** | Low-latency peer-to-peer streaming using WebRTC |
|  **Live In-Room Chat** | Instant messaging powered by Socket.io |
|  **Screen Sharing** | Share your screen seamlessly during any meeting |
|  **Secure Authentication** | JWT-based sessions with bcrypt password hashing |
|  **Meeting History** | Room codes stored and retrievable for quick rejoin |
|  **Premium UI/UX** | Glassmorphism dark theme built with Material UI |
|  **Smart Audio** | Built-in echo cancellation & noise suppression |
|  **Cloud Deployed** | Frontend on Vercel, backend on Render, DB on Atlas |

---

##  Tech Stack

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Material UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=mui&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS_Modules-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white)
![WebRTC](https://img.shields.io/badge/WebRTC-333333?style=for-the-badge)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

### Database & Cloud
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)

---

##  Project Structure

```
apna-video-app/
├── Frontend/                    # React + Vite client
│   ├── src/
│   │   ├── contexts/            # AuthContext & Axios config
│   │   ├── pages/               # Landing, Home, VideoRoom components
│   │   ├── styles/              # CSS Modules (glassmorphism UI)
│   │   └── App.jsx              # React Router setup
│   └── vercel.json              # Vercel deployment config
│
└── server/                      # Node.js + Express backend
    ├── controllers/             # Auth & History business logic
    ├── models/                  # Mongoose schemas (User, Activity)
    ├── routes/                  # REST API route definitions
    ├── socketManager.js         # WebRTC signaling + live chat
    ├── index.js                 # Server entry point
    └── .env                     # Environment variables
```

---

##  Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account (or local MongoDB)

### 1. Clone the Repository

```bash
git clone https://github.com/Thusharshetty/apna-video-app.git
cd apna-video-app
```

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside the `server/` folder:

```env
MONGO_URI=your_mongodb_connection_string
PORT=8000
FRONTEND_URL=http://localhost:5173
```

Start the backend:

```bash
npm start
```

### 3. Frontend Setup

```bash
cd ../Frontend
npm install
npm run dev
```

### 4. Open in Browser

```
http://localhost:5173
```

---

##  API Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/users/register` | Register a new user account |
| `POST` | `/api/users/login` | Authenticate and receive JWT token |
| `GET` | `/api/users/get_all_activity` | Retrieve meeting history for the user |
| `POST` | `/api/users/add_to_activity` | Save a room code to meeting history |

>  **Socket.io** handles all WebRTC signaling, peer connection setup, room management, and live chat — outside the REST layer.

---

##  Deployment

| Layer | Platform | Details |
|-------|----------|---------|
| Frontend | [Vercel](https://vercel.com) | Auto-deploy from `main`, CDN-optimised |
| Backend | [Render](https://render.com) | Persistent server for WebSocket support |
| Database | [MongoDB Atlas](https://cloud.mongodb.com) | Free tier M0 cluster |

---

##  Roadmap

- [ ] Screen recording & export
- [ ] Raise hand / reactions in meetings
- [ ] Waiting room before joining
- [ ] Meeting link / invite system
- [ ] Mobile-responsive video grid

---

##  Author

**Thushar Shetty**

B.Tech Computer Science — Canara Engineering College (2027)

[![GitHub](https://img.shields.io/badge/GitHub-Thusharshetty-181717?style=flat-square&logo=github)](https://github.com/Thusharshetty)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Thushar_Shetty-0077B5?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/thushar-shetty-8ab1802a2/)

---

##  License

This project is for educational and portfolio purposes.

© 2026 Thushar Shetty — All rights reserved.
