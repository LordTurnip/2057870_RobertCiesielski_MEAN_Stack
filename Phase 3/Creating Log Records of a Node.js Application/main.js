var fs = require('fs');
let obj = require("readline");
const fileName = 'account.json'
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


var item = {
    table: []
};

var r1 = obj.createInterface({
    input: process.stdin,        // standard input device keyboards 
    output: process.stdout       // standard output device console 
});

r1.question("Enter first name: ", (fname) => {
    r1.question("Enter last name: ", (lname) => {
        r1.question("Enter gender: ", (gender) => {
            r1.question("Enter email: ", (email) => {

                var person = {
                    FirstName: fname,
                    LastName: lname,
                    Gender: gender,
                    Email: email,
                    Date: year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds
                }

                
                fs.readFile(fileName, function (err, content) {
                    if (err) {
                        console.log(err);
                    } else {
                        try {
                            item = JSON.parse(content); //if not empty, convert it to objects
                        }
                        catch (err) {
                            console.log("JSON Empty! Making First entry!");
                        }

                        item.table.push(person);

                        json = JSON.stringify(item); //convert it back to json

                        fs.writeFile(fileName, json, 'utf8', function (err){
                            if (err) throw err;
                        })
                    }
                });
                r1.close();
            })
        })
    })
})


