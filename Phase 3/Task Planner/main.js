// load the module 
var fs = require('fs');
let express = require("express");
let bodyParser = require("body-parser");
const fileName = 'tasks.json'

//creating the reference of express module 
let app = express();
// which is use to enable post data receving from normal html form. 
var encode = bodyParser.urlencoded({ extended: true });



app.get("/", (request, response) => {
    response.sendFile(__dirname + "\\index.html");
})

app.get("/tasks.json", (request, response) => {
    response.sendFile(__dirname + "\\tasks.json");
})

app.listen(9090, () => console.log("Server running on port number 9090"))

var item = new Array();

app.post('/create-task', encode, function (req, res) {
    
    fs.readFile(fileName, function (err, content) {
        if (err) {
            console.log("No File!");
        } else {
            try {
                item = JSON.parse(content); //if not empty, convert it to objects
            }
            catch (err) {
                console.log("JSON Empty! Making First entry!");
            }

            item.push(req.body);

            json = JSON.stringify(item); //convert it back to json

            fs.writeFile(fileName, json, 'utf8', function (err) {
                if (err) throw err;
            })
        }
    });
});



app.post('/delete-task', encode, function (req, res) {
    console.log(req.body.idDel);
    fs.readFile(fileName, function (err, content) {
        if (err) {
            console.log("No File!");
        } else {
            try {
                item = JSON.parse(content); //if not empty, convert it to objects
            }
            catch (err) {
                console.log("JSON Empty! Making First entry!");
            }
            for (let i = 0; i < item.length; i++) {
                if (item[i].id === req.body.idDel) {
                    delete item[i];
                    console.log("Deleted item.")
                }
            }
            var filtered = item.filter(function (el) {
                return el != null;
            });
            json = JSON.stringify(filtered); //convert it back to json

            fs.writeFile(fileName, json, 'utf8', function (err) {
                if (err) throw err;
            })
        }
    });
});
