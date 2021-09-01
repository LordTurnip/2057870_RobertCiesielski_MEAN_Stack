const app = require('express')();
const server = require('http').createServer(app)
const io = require('socket.io')(server);
const PORT = process.env.PORT || 9090
 
app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html');
});
 
server.listen(PORT, () => {
   console.log('Server is running on port: ' + PORT);
});

app.get("/assets/fonts/vcr_osd_mono_1.001-webfont.woff2", (request, response) => {
    response.sendFile(__dirname + "\\assets/fonts/vcr_osd_mono_1.001-webfont.woff2");
})

app.get("/assets/fonts/vcr_osd_mono_1.001-webfont.woff", (request, response) => {
    response.sendFile(__dirname + "\\assets/fonts/vcr_osd_mono_1.001-webfont.woff");
})

io.on('connection', (socket) => {
 
   socket.on('disconnect', () => {
       console.log('User disconnected - Username: ' + socket.username);
   });
 
   socket.on('new message', (msg) => {
       io.emit('send message', { message: msg, user: socket.username });
       console.log(socket.username + ': ' + msg);
       io.emit('send message', { message: "Hi " + socket.username + "! Nice to meet you!", user: "Server" });
       console.log("Server: Hi " + socket.username + "! Nice to meet you!");
   });
 
   socket.on('new user', (usr) => {
       socket.username = usr;
       console.log('User connected - Username: ' + socket.username);
   });
});

