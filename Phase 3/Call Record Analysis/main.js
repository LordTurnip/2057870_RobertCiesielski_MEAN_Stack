var fs = require('fs');
let obj = require("readline");
const express = require('express')
const mongoose = require("mongoose");
const fileName = 'call_data.json'
let app = express();

let rawdata = fs.readFileSync(fileName);
const data = JSON.parse(rawdata, 'utf-8');

let url = "mongodb://localhost:27017/callrecords"


var Schema = mongoose.Schema
var callSchema = new Schema({
	"_id": Number,
	"source": Number,
	"destination": Number,
	"sourceLocation": Number,
	"destinationLocation": Number,
	"callDuration": Number,
	"roaming": Boolean,
	"callCharge": Number
    })

        var Call = mongoose.model('Call', callSchema)



mongoose.connect(url).then(res=>console.log("connected")).catch(error=>console.log(error));
app.listen(9090, () => console.log("Server running on port number 9090"))




Call.insertMany(data).then(function () {
    console.log("Data inserted")  // Success
}).catch(function (error) {
    console.log(error)      // Failure
});