// load the module 
let express = require("express");
let bodyParser = require("body-parser");
const mongoose = require("mongoose");
//creating the reference of express module 
let app = express();
// which is use to enable post data receving from normal html form. 
var encode = bodyParser.urlencoded({ extended: true });
var courses;
var Schema = mongoose.Schema;


var courseSchema = new Schema({
    courseName: String,
    _id: Number,
    description: String,
    amount: Number
})

var Course = mongoose.model('Course', courseSchema)

let url = "mongodb://localhost:27017/courseRecords"

mongoose.connect(url).then(res => console.log("connected")).catch(error => console.log(error));

app.get("/", (request, response) => {
    response.sendFile(__dirname + "\\index.html");
})

app.get("/tasks.json", (request, response) => {
    response.sendFile(__dirname + "\\tasks.json");
})

app.listen(9090, () => console.log("Server running on port number 9090"))
var item = new Array();



app.use(express.static(__dirname + '/'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);


app.get("/", (request, response) => {
    response.sendFile(__dirname + "\\index.html");
})

app.post("/", (request, response) => {
    response.sendFile(__dirname + "\\index.html");
})

app.get("/add-course", (request, response) => {
    response.sendFile(__dirname + "\\addCourse.html");
})

app.get("/update-course", (request, response) => {
    response.sendFile(__dirname + "\\updateCourse.html");
})

app.get("/delete-course", (request, response) => {
    response.sendFile(__dirname + "\\deleteCourse.html");
})

app.get("/fetch-course", async(request, response) => {
    var query = await Course.find({}, 'courseName description amount').exec();
    response.render('fetchCourse', {
        course: query
    })
})

app.post("/load-table", (request, response) => {

})


app.post('/create-task', encode, function (req, res) {

    let course = new Course({
        courseName: req.body.courseName,
        _id: req.body.courseID,
        description: req.body.description,
        amount: req.body.amount
    });

    course.save().then(function () {
        console.log("Data inserted")  // Success
    }).catch(function (error) {
        console.log(error)      // Failure
    });
});

app.post('/update-task', encode, function (req, res) {


    Course.updateOne({ _id: req.body.courseID }, { amount: req.body.amount }).then(function () {
        console.log("Data updated")  // Success
    }).catch(function (error) {
        console.log(error)      // Failure
    });
});



app.post('/delete-task', encode, function (req, res) {
    Course.deleteOne({ _id: req.body.courseID }).then(function () {
        console.log("Data Deleted")  // Success
    }).catch(function (error) {
        console.log(error)      // Failure
    });
});
