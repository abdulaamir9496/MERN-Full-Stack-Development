const express = require('express');
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");


app.get('/', (req, res) => {
    res.send("Welcome to Data Association MongoDB");
});

app.get('/create', async (req, res) => {
    // res.send("User created");
    let user = await userModel.create({
        username: "Aamir",
        age: 29,
        email: "aamir@gmail.com",
    });
    res.send(user);
});

//POST created
app.get('/post/create', async (req, res) => {
    // res.send("The create post is working");
    let post = await postModel.create({
        postdata: "This is a post",
        user: "67ff923361ba8744d6fe79a3"   //post knows who is user
    });

    let user = await userModel.findOne({_id: "67ff923361ba8744d6fe79a3"});
    user.posts.push(post._id);
    await user.save();
    res.send({post, user});
});

app.listen(3000);
