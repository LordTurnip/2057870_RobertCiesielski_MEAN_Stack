function storeData() {
    // take value from text field using id or name
    //we can store json object. but we have to convert 
    // into string. 
    var project = {
        'Client': '',
        'Project':'',
        'Budget': ''
    };

    project["Client"] = document.getElementById("client").value;
    project["Project"] = document.getElementById("project").value;
    project["Budget"] = document.getElementById("budget").value;
    for (var i = 0; i < localStorage.length+1; i++) {
        if (localStorage.getItem(i) === null)
        {
            console.log("setting");
            localStorage.setItem(i, JSON.stringify(project));
            break;
        }
            
    }

    console.log(project);
}

function displayData() {
    let totalBudget = 0;
    var tableContent = ""
    var startTable = "<table border=0><tr><th>Client Name</th><th>Project Name</th><th>Budget</th></tr>"

    for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.getItem(i) === null) {
            break;
        }
        let empObj = localStorage.getItem(i);
        let empJson = JSON.parse(empObj)
        tableContent += "<tr><td>" + empJson.Client + "</td><td>" + empJson.Project + "</td><td>" + empJson.Budget + "</td></tr><br/>";
        totalBudget = totalBudget + parseInt(empJson.Budget);
    }

    
    var endTable = "</table>"
    var annualBudget = "</br>Total Budget: " + totalBudget;
    tableContent = startTable + tableContent + endTable + annualBudget;
    document.getElementById("main").innerHTML=tableContent;
}