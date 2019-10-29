//dependencies
const express = require("express");
const app = express();
const port = 3000

////////////////Greetings////////////////////
app.get("/greeting/:name", (req, res) => {
    res.send("Hola " + req.params.name + "!")
})

///////////////Tip Calculator///////////////
app.get("/tip/:total/:tipPercentage", (req, res) => {
    let tip = (parseInt(req.params.total) * parseInt(req.params.tipPercentage))/100
    res.send("The tip amount is: " +tip)
})

////////////////Magic 8 ball/////////////
const magicArray = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get("/magic/:question", (req, res) => {
    let random = Math.floor(Math.random() * magicArray.length)
    res.send("Your question is: " + req.params.question + " annddd the answer is...(drum roll)..." + "<h1>" + magicArray[random] + "<h1>")

})




app.listen(port, () => {
    console.log("hi");
})
