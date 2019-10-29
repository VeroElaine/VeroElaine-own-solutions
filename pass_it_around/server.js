const express = require("express");
const app = express();
const port = 3000;

const budget = require("./models/budget.js")
    
app.use(express.static("public"))

app.use(express.urlencoded({extended:false}));

app.get("/budget", (req, res) => {
    // res.send("hola mundo");
    res.render("index.ejs", {
        allBudget: budget

    });
})

app.get("/budget/new", (req, res) => {
    res.render("new.ejs")
})
app.post("/budget", (req, res) => {
    budget.push(req.body);
    res.redirect("/budget");
})

app.get("/budget/:index", (req, res) => {
    res.render("show.ejs", {
        budget: budget[req.params.index]
    });
})


app.listen(port, () => {
    console.log("hello world");
})
