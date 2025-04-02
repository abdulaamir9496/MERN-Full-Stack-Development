const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');    //encryption and decryption: for password hashing and salting we use bcrypt.

app.use(cookieParser());

app.get('/', (req, res) => {
    // console.log('Hello World');
    //from any route how to set cookies and how to read
    res.cookie("name", "aamir");   //for any route we can set the cookie, like this.
    res.send("Done");
});

app.get('/read', (req, res) => {
    console.log(req.cookies);   //to read the cookies we can use req.cookies on any route.
    res.send("Read Page");
});

app.listen(3000);
