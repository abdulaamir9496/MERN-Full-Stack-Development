// Creating the app and server setup:
const express = require('express');
const app = express();
const userModule = require('./models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Creatnig cookies for storing data: 
const cookieParser = require('cookie-parser');
const path = require('path');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.render('index');
});

//Creating using and handling user registration:
app.post('/create', (req, res) => {
    let { username, email, password, age } = req.body;
    
    // bcrypt.genSalt(10, (err, salt) => {
    //     console.log(salt);
    // });
    
    //Salting + Hashing user password
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            // console.log(hash );
        let createdUser = await userModule.create({
            username,
            email,
            password: hash,
            age
        });
        //Setting JWT token for user
        let token = jwt.sign({email}, "secretkeytoken")
        res.cookie("token", token);
        res.send(createdUser);
        });
    });
});

//Using login
app.get('/login', async (req, res) => {
    res.render('login');
});

//Creating login route
app.post('/login', async (req, res) => {
    //Checking if email is valid or not
    let user = await userModule.findOne({ email: req.body.email });
    if(!user) {
        return res.send("Email or Password is incorrect");
    }
    // console.log(user.password, req.body.password);
    // console.log(user);
    //Hashing password + encrypting password + handling user login
    bcrypt.compare(req.body.password, user.password, (err, result) => {
        // console.log(result);
        // res.send("Yes you can login")
        if(result) {
            let token = jwt.sign({email : user.email}, "secretkeytoken")
            res.cookie("token", token);    //sending token to user after login saving in frontend
            res.send("Yes you can login");
        }
        else res.send("Email or Password is incorrect");
    });
});


//Using logout
app.get('/logout', (req, res) => {
    res.cookie("token", "");
    res.redirect("/");
});

//Start server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
    console.log("Visit http://localhost:3000");
});
