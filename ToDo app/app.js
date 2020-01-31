const express = require("express");

const bodyParser = require("body-parser");

const ejs = require("ejs");

//Import the module of data.js file...

const date = require(__dirname + "/date.js");



const app = express();

app.use(express.static("public"));

//writeh the line to use the EJS

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));


//Items Array store
let items = ["Buy Foo", "Cook cake", "Eat Food"];

let workitmes = [];



app.get("/", (req, res) => {

    let day = date.getdate();
    // let day = date.getday();

    res.render("list", { listTitle: day, newListItem: items });
})


app.post("/", (req, res) => {
    //condition which list have to add the items
    var item = req.body.item;

    console.log(req.body);
    if (req.body.list === "work") {
        workitmes.push(item);
        res.redirect("/work");

    } else {

        items.push(item);

        res.redirect("/")
    }


})


//work router ....


app.get("/work", (req, res) => {


    res.render("list", { listTitle: "work", newListItem: workitmes });
})



app.get("/about", (req, res) => {

    res.render("about");
})

app.listen(3000, () => {
    console.log('server is running very well')
})