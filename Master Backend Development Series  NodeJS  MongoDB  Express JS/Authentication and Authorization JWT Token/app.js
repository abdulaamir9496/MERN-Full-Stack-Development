const express = require('express');
const app = express();
const userModule = require('./models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


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

app.post('/create', (req, res) => {
    let { username, email, password, age } = req.body;
    
    // bcrypt.genSalt(10, (err, salt) => {
    //     console.log(salt);
    // });
    
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            // console.log(hash );
        let createdUser = await userModule.create({
            username,
            email,
            password: hash,
            age
        });

        let token = jwt.sign({email}, "secretkeytoken")
        res.cookie("token", token);
        res.send(createdUser);
        });
    });
});

app.post('/login', async (req, res) => {
    let user = await userModule.fineOne({email: req.body.email});
    res.render('login');
});



app.get('/logout', (req, res) => {
    res.cookie("token", "");
    res.redirect("/");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
    console.log("Visit http://localhost:3000");
});
