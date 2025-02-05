const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/profile', function(req, res) {
    res.send("Champion the Coder")
})

app.get('/contact', function(req, res) {
    res.send("contact the Coder")
})

app.get('/about', function(req, res) {
    res.send("about the Coder")
})


app.listen(3000)

//create routes