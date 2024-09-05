const express = require('express');
const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

let items = ["Buy Food", "Cook Food", "Eat Food"];
workItems = [];

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    
    let todays = new Date();
    let options = { 
        weekday: 'long'
    };
    let option = {
        weekday: 'long',
        day: 'numeric', 
        month: 'long'
    }
    let day = todays.toLocaleDateString('en-US', options);
    let dayOfWeek = todays.toLocaleDateString('en-US', option);

    if (todays.getDay() == 6 || todays.getDay() == 0) {
        message = "stop working on " + day+"s, " + "instead do the following:";
    } else {
        message = "keep working on " + day+"s";
    }
    res.render("list", {
        listTitle: dayOfWeek,
        message: message,
        newListItems: items
    });
    
});

app.get("/work", function(req, res) {
    res.render("list", {
        listTitle: "Work List",
        newListItems: workItems
    })
});

app.post("/", (req, res) =>{
    let item = req.body.newItem;
    console.log(req.body);
    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work")
    } else {
        items.push(item);
        res.redirect("/");
    }
})

app.post("/work", (req, res) => {
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.listen(port, function() {
    console.log("listening on port " + port);
});