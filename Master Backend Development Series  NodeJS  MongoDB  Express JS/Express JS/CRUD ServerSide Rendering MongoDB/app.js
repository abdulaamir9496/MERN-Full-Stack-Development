const express = require('express');
const app = express();
const path = require('path');
const userModel = require('./models/user');
const user = require('./models/user');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/read', async (req, res) => {
    let users = await userModel.find();
    res.render('read', { users });
});

app.post('/create', async (req, res) => {
    // console.log(req.body);
    // res.send('Data received');

    // const user = new userModel({
    //     name: req.body.name,
    //     email: req.body.email,
    //     image: req.body.image
    // });

    let { name, email, image } = req.body;   //destructuring
    let createdUser = await userModel.create({
        // name: name,
        name,  //if name is same as key name then we can write like this also in es6 syntax.
        email,
        image
    });
    // res.send(createdUser);
    res.redirect('/read');
});

app.get('/edit/:userid', async (req, res) => {
    let user = await userModel.findOne({_id: req.params.userid});
    res.render('edit', { user });
});

app.post('/update', async (req, res) => {
    let { name, email, image } = req.body;
    let user = await userModel.findOneAndUpdate({_id: req.params.userid}, { name, email, image }, { new: true });
    res.redirect('/read');
});

app.get('/delete/:id', async (req, res) => {
    let users = await userModel.findByIdAndDelete({ _id: req.params.id});
    res.redirect('/read');
});

app.post('/update/:userid', async (req, res) => {
    let { name, email, image } = req.body;
    await userModel.findByIdAndUpdate(req.params.userid, { name, email, image });
    res.redirect('/read');
});

app.listen(3000);
