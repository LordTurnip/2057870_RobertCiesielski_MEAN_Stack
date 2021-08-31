var fs = require('fs');
const fileName = 'tasks.json'
var button = document.querySelector("#btn");

button.addEventListener("click", function onclick(event) {
    displayData();
});
function displayData() {
    console.log("create table")
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

            var tableContent = ""
            var startTable = "<table border=0><tr><th>Emp ID</th><th>ID</th><th>Task</th><th>Deadline</th></tr>"

            for (let x = 0; x < item.table.length; x++) {
                tableContent += "<tr><td>" + item.table[x].empid + "</td><td>" + item.table[x].id + "</td><td>" + item.table[x].task + "</td><td>" + item.table[x].deadline + "</td></tr><br/>";
            }


            var endTable = "</table>"
            tableContent = startTable + tableContent + endTable;
            document.getElementById("main").innerHTML = tableContent;
        }
    });
}