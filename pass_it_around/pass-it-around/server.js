const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1> 99 bottles of beer on the wall, <br> 99 bottles of beer, <br> <a href =http://localhost:3000/98>take one down, pass it around</a> </h1>")
})

app.get("/:num", (req, res) => {
    const bottlesLeft = req.params.num;
    console.log(bottlesLeft);
    if(req.params.num <= 0){
        res.send("<h1> Everyone finished the beer! Go buy some more and play again: <br> <a href=/>Lets drink again</a> </h1>")
    } else {
        res.send("<h1> "+bottlesLeft + " bottles of beer on the wall, <br> "+ bottlesLeft+ " bottles of beer, <br> <a href =http://localhost:3000/" + (bottlesLeft -1) +">take one down, pass it around</a> </h1>")
    }
})


app.listen(port, () => {
    console.log("hi");
})
