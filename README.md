🎥 Apna Video Call — Real-Time Video Conferencing Platform

A full-stack MERN application that enables seamless, real-time video meetings. Users can create secure rooms, chat live, share screens, and track meeting history — all within a premium glassmorphism UI.

🔗 Live Demo: https://apna-video-call-ivory.vercel.app/

💻 GitHub: https://github.com/Thusharshetty/apna-video-app

📸 Screenshots

Landing & Authentication — Premium dark theme with secure login

<img width="100%" alt="Landing Page" src="https://via.placeholder.com/1000x500.png?text=Add+Landing+Screenshot+Here" />

Home Dashboard — Start new meetings or join existing ones

<img width="100%" alt="Home Dashboard" src="https://via.placeholder.com/1000x500.png?text=Add+Dashboard+Screenshot+Here" />

Live Video Room — WebRTC video, chat, and controls

<img width="100%" alt="Video Room" src="https://via.placeholder.com/1000x500.png?text=Add+Video+Room+Screenshot+Here" />
✨ Features
🎥 Real-Time Video & Audio — Low-latency peer-to-peer streaming using WebRTC
💬 Live Chat — Instant messaging with Socket.io
🖥️ Screen Sharing — Share your screen in meetings
🔒 Authentication — Secure login with bcrypt hashing
🕒 Meeting History — Stores room codes for reuse
🎨 Premium UI/UX — Glassmorphism dark theme with Material UI
🔇 Smart Audio — Echo cancellation & noise suppression
🛠️ Tech Stack
Frontend








Backend








Database

📂 Project Structure
apna-video-app/
├── Frontend/               # React/Vite client
│   ├── src/
│   │   ├── contexts/       # Auth context & Axios config
│   │   ├── pages/          # Components (Landing, Home, Video)
│   │   ├── styles/         # CSS Modules (UI design)
│   │   └── App.jsx         # Routing setup
│   └── vercel.json         # Deployment config
│
└── server/                 # Node.js backend
    ├── controllers/        # Business logic (Auth, History)
    ├── models/             # Mongoose schemas
    ├── routes/             # API routes
    ├── socketManager.js    # WebRTC signaling + chat
    ├── index.js            # Server entry point
    └── .env                # Environment variables
🚀 Getting Started (Local Setup)
Prerequisites
Node.js v18+
MongoDB Atlas (or local MongoDB)
1. Clone the Repository
git clone https://github.com/Thusharshetty/apna-video-app.git
cd apna-video-app
2. Backend Setup
cd server
npm install

Create a .env file:

MONGO_URI=your_mongodb_connection_string
PORT=8000
FRONTEND_URL=http://localhost:5173

Start backend:

npm start
3. Frontend Setup
cd Frontend
npm install
npm run dev
4. View in Browser
http://localhost:5173
🌐 API & Routes
Method	Route	Description
POST	/api/users/register	Register user
POST	/api/users/login	Login user
GET	/api/users/get_all_activity	Get meeting history
POST	/api/users/add_to_activity	Save meeting

⚡ Socket.io handles signaling, chat messages, and WebRTC connections dynamically.

☁️ Deployment
Service	Platform
Frontend	Vercel
Backend	Render
Database	MongoDB Atlas
👨‍💻 Author

Thushar Shetty

B.Tech Computer Science, Canara Engineering College (2027)
GitHub: https://github.com/Thusharshetty
LinkedIn: https://www.linkedin.com/in/thushar-shetty-8ab1802a2/
📄 License

This project is for educational purposes only.

© 2026 Thushar Shetty
