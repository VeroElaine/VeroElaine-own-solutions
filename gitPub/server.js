const express = require("express");
const app = express();
port = 3000;

const drinks = require("./models/drinks.js");
const food = require("./models/food.js")

// app.get("/", (req, res) => {
//     res.send("Welcome to the Gitpub App!");
// })

app.get("/drinks/", (req, res) => {
    res.render("index.ejs", {
        allDrinks: drinks,
        allFood: food,
    });
})

app.get("/drinks/:indexOfDrinks", (req, res) => {
    // res.send(req.params.id)
    res.render("show.ejs", {
        drinks:
        drinks[req.params.indexOfDrinks]
    });
})

app.get("/food/:indexOfFood", (req, res) => {
    res.render("show_food.ejs", {
        food:
        food[req.params.indexOfFood]
    })
})

app.listen(port, () => {
    console.log("listening");
})
