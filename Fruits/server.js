const express = require('express');
const methodOverride = require("method-override");
const app = express();

const fruits = require('./models/fruits.js');

app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));
app.use(methodOverride("_method"));

app.get('/fruits/', (req, res) => {
    // res.send(fruits)
    res.render(
        'index.ejs',
        {
            allFruits:fruits
        }
    );
});

app.get("/fruits/:indexOfFruitsArray/edit", (req, res) => {
    // res.send("editing");
    res.render("edit.ejs", {
        fruit: fruits[req.params.indexOfFruitsArray],
        index: req.params.indexOfFruitsArray
    });
})

app.get('/fruits/new', (req, res) => {
    res.render('new.ejs');
});

app.put("/fruits/:indexOfFruitsArray", (req, res) => {
    // res.send("updating");
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    console.log(req.body);
    fruits[req.params.indexOfFruitsArray] = req.body;
    // res.send(req.body);
    res.redirect("/fruits/")
})

app.post('/fruits', (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    console.log(req.body);
    fruits.push(req.body);
    res.redirect('/fruits');
});

app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    // res.send(fruits[req.params.indexOfFruitsArray]);
    res.render('show.ejs', {
        fruit: fruits[req.params.indexOfFruitsArray]
    });
});

app.post('/products', (req, res) => {
    console.log('Create route accessed!');
    console.log('Req.body is: ', req.body);
    res.send(req.body);
});

app.delete("/fruits/:indexOfFruitsArray", (req, res) => {
    // res.send("deleting\n")
    fruits.splice(req.params.indexOfFruitsArray, 1);
    res.redirect("/fruits");
})

app.listen(3000, () => {
    console.log('listening');
})
