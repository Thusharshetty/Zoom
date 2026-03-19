const socketio = require("socket.io")
const Server = socketio.Server;


let connections = {};
let messages = {};
let timeOnline = {};

const connectToSocket = (server) => {
    const io = new Server(server,
        {
            cors: {
                origin: "*",
                methods: ["GET", "POST"],
                allowedHeaders: "*",
                credentials: true
            }
        }
    );
    io.on("connection", (socket) => {
        socket.on("join-call", (path) => {
            if (connections[path] === undefined) {
                connections[path] = [];
            }
            connections[path].push(socket.id);
            timeOnline[socket.id] = new Date();

            for (let i = 0; i < connections[path].length; i++) {
                io.to(connections[path][i]).emit("user-joined", socket.id, connections[path]);
            };

            if (messages[path] !== undefined) {
                for (let i = 0; i < messages[path].length; i++) {
                    io.to(socket.id).emit("chat-message", messages[path][i]['data'], messages[path][i]['sender'], messages[path][i]['socket-id-sender']);
                }
            }

        });
        socket.on("signal", (toId, message) => {
            io.to(toId).emit("signal", socket.id, message);
        });
        socket.on("chat-msg", (data, sender) => {
            let matchingRoom = '';
            let found = false;
            for (const [roomKey, roomValue] of Object.entries(connections)) {
                if (roomValue.includes(socket.id)) {
                    matchingRoom = roomKey;
                    found = true;
                    break;
                }
            }
            if (found) {
                if (messages[matchingRoom] === undefined) {
                    messages[matchingRoom] = [];
                }
                messages[matchingRoom].push({
                    'sender': sender, 'data': data, 'socket-id-sender': socket.id
                });
                connections[matchingRoom].forEach((id) => {
                    io.to(id).emit('chat-message', data, sender, socket.id);
                });
            }
        });
        socket.on("disconnect", () => {
            var diffTime = Math.abs(timeOnline[socket.id] - new Date());
            console.log("User disconnected: ", diffTime);
            var foundKey;
            for (const [key, value] of JSON.parse(JSON.stringify(Object.entries(connections)))) {
                for (let i = 0; i < value.length; i++) {
                    if (value[i] === socket.id) {
                        foundKey = key;
                        for (let j = 0; j < connections[foundKey].length; j++) {
                            io.to(connections[foundKey][j]).emit('user-left', socket.id);
                        }
                        var index = connections[foundKey].indexOf(socket.id);
                        connections[foundKey].splice(index, 1);
                        console.log(foundKey, "has left");

                        if (connections[foundKey].length === 0) {
                            delete connections[foundKey];
                        }
                        break;
                    }
                }
            }
        });
    })
    return io;
}

module.exports = { connectToSocket };
