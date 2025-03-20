const express = require('express');  //Taken express
const app = express();  //Created an instance of express basic app.
const path = require('path');   //Taken path module to join the path of public folder.

//it will do us a parsers job for us.
app.use(express.json());   //This is a middleware which will parse the incoming request body and convert it into json object.
app.use(express.urlencoded({ extended: true }));   //This is a middleware which will parse the incoming request body and convert it into key value pairs.
//All static files like: images, videos, stylesheets, vinilla js files, etc. will be served from public folder.
app.use(express.static(path.join(__dirname, 'public'))); //iski jagah pura path aa jayega.

//ejs is to show the frontend
//setting up our view engine: we can write below or above of parsers which is in above 2 lines of code.
app.set('view engine', 'ejs');    //render the ejs files


//setting up our routes
app.get('/', (req, res) => {
    // res.send('Hello World');
    res.render("index");   //render the basic pages like: index.ejs file
});

//creating Dynamic user profile route. To make a dynamic route we use colon(:) before the parameter.
app.get('/profile/:username', (req, res) => {  //from the frontend we are sending the username to backend.
    // res.send("profile");   //what we are sending from the backend
    // res.send(req.params.username);   //from the backend we are sending the username to frontend.
    res.send(`Welcome ${req.params.username}`);
});

app.get('/profile/:username/:age', (req, res) => {
    // res.send(req.params);   //Here we are sending the object of username and age.
    res.send(`Welcome to the Full Stack Web Development ${req.params.username} and your age is ${req.params.age}`);
});

app.listen(3000, function(){
    console.log('listening on port 3000');
});
