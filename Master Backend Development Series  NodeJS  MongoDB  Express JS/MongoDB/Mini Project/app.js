const express = require('express');
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    // console.log("Hello World");
    // res.send('Hello World');
    res.render('index');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/profile', isLoggedIn, (req, res) => {
    console.log(req.user);
    res.render('profile');
});

app.post('/register', async (req, res) => {
    //Destructuring
    let { name, username, email, age, password } = req.body;
//check if any user exist already with that email id
    let user = await userModel.findOne({ email });
    if(user) return res.status(500).send("User already exists with that email id");

    bcrypt.genSalt(10, (err, salt) => {
        // console.log(salt);
        bcrypt.hash(password, salt, async (err, hash) => {
            // console.log(hash);
            let user = await userModel.create({
                name,
                username,
                email,
                age,
                password: hash
            });
            let token = jwt.sign({ email: email, userid: user._id }, "secretkey");
            res.cookie();
            res.send("User registered successfully");
        });
    });
});

app.post('/login', async (req, res) => {
    //Destructuring
    let { email, password } = req.body;
//check if any user exist already with that email id
    let user = await userModel.findOne({ email });
    if(!user) return res.status(500).send("Something went wrong, please try again later");

    bcrypt.compare(password, user.password, (err, result) => {
        if(result) {
            let token = jwt.sign({ email: email, userid: user._id }, "secretkey");
            res.cookie();
            res.status(200).send("User logged in successfully");
        }
        // res.redirect('/login');
        else res.redirect('/login').res.status(500).send("Invalid credentials");
    });
});

app.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/login');
});

function isLoggedIn(req, res, next) {
    if(req.cookies.token === "") res.send("Please login to continue");
    else{
        let data = jwt.verify(req.cookies.token, "this is my secret key");
        if(!data) return res.status(500).send("Invalid token");
        req.user = data;
        next();
    } 
}

app.listen(3000);