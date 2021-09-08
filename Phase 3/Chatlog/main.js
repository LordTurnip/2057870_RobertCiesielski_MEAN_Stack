const app = require('express')();
const server = require('http').createServer(app)
const io = require('socket.io')(server);
const mongoose = require("mongoose");
const PORT = process.env.PORT || 9090


let date_ob = new Date();

let date = ("0" + date_ob.getDate()).slice(-2);

// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

// current year
let year = date_ob.getFullYear();

// current hours
let hours = date_ob.getHours();

// current minutes
let minutes = date_ob.getMinutes();

// current seconds
let seconds = date_ob.getSeconds();
//year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds

var Schema = mongoose.Schema;


var chatSchema = new Schema({
    date: String,
    user: String,
    message: String,

})
var Chat = mongoose.model('Chat', chatSchema)

let url = "mongodb://localhost:27017/chatRecords"
mongoose.connect(url).then(res => console.log("connected")).catch(error => console.log(error));

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
       io.emit('send message', { message: msg, user: "["+hours + ":" + minutes + ":" + seconds + "] " +socket.username });
       console.log(socket.username + ': ' + msg);

       let chat = new Chat({
           date: year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds,
           user: socket.username,
           message: msg,
       });

       chat.save().then(function () {
           console.log("Message saved.")  // Success
       }).catch(function (error) {
           console.log(error)      // Failure
       });
   });
 
   socket.on('new user', (user) => {
       socket.username = user;
       console.log('User connected - Username: ' + socket.username);
   });
});

