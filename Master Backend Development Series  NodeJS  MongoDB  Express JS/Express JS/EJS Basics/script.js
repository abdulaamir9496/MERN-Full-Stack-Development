// const express = require('express')
// const app = express()


//Routing

//create routes
// app.get(route, requestHandler)  
//1st we should give the route, and then we should give the request handler(requestHandler is a 'middleware'). 

/**
 * In short, a **request handler** is a function in Express that processes HTTP requests to a specific route, performs necessary operations, and sends a response to the client.

### Basic Example:

```javascript
const express = require('express');
const app = express();
const port = 3000;

// GET route with a request handler
app.get('/hello', (req, res) => {
    res.send('Hello, world!');  // Sends response to the client
});

// POST route with a request handler
app.post('/users', (req, res) => {
    const newUser = { id: 1, name: 'John Doe' };
    res.status(201).json(newUser);  // Sends the newly created user as a JSON response
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
```

### Key Points:
- **GET `/hello`** route sends "Hello, world!" as a response.
- **POST `/users`** route responds with a newly created user in JSON format.

Request handlers manage the logic and send responses for the specific routes.
 */

// app.get('/', function (req, res) {
//     res.send('Hello World')
// })

// app.get('/profile', function(req, res) {
//     res.send("Champion the Coder")
// })

// app.get('/contact', function(req, res) {
//     res.send("contact the Coder")
// })

// app.get('/about', function(req, res) {
//     res.send("about the Coder")
// })

// app.listen(3000)


//TOPIC: Middleware
// const express = require('express');
// const app = express();

// //If I request for "/about" from a browser --> accepted by the server code which is in above code line.
// //After accepting the request, the server will send a response back to the client(browser) 
// //which is "about" to be accepted by the server code which is in above code line.

// //"/about"  --> accepted by the server --> app.use(which has 3 things in it's function (res, req, next)) compulsory.

// //Example code below: 
// app.use(function(res, req, next) {
//     console.log('middleware listening');
//     // next();
//     next();  //forwards the request to the routing
// })

// //If I don't use nex(); the console webpage will keep on loading.
// //If I use next(); it will prevent the browser from loading again and goes to next function.


// app.use(function(res, req, next) {
//     console.log('middleware listening one more time');
//     next();
// })

// app.get("/", function(req, res) {
//     console.log("first route");
//     res.send("Hello World");
// })   
// //skips first route and goes to the next route "/about" which we asked for,
// // as we have not used next(); in the first route. It will jump into the next route "/about".

// app.get("/about", function(req, res) {
//     console.log("second route");
//     res.send("about the Coder");
// })

// app.get("/contact", function(req, res) {
//     console.log("third route");
//     res.send("contact the coder");
// })

// app.listen(3000);

// //app.use(); run again and again
// //app.get(); run only once

//TOPIC: Request and Response Handling
// const express = require('express');
// const app = express();

// app.get("/", function(req, res) {
//     res.send("first route");
// })

// app.get("/profile", function(req, res) {
//     res.send("profile route");
// })

// app.listen(3000);

//TOPIC: Error Handling
const express = require('express');
const app = express();

app.get("/", function(req, res) {
    res.send("first route");
})

//keep this in last place
app.get("/profile", function(req, res) {
    res.send("profile page found")
    // res.status(404).send("Page Not Found");
})

app.get("/contact", function(err, req, res, next) {
    return next(new Error("Something went wrong"))
});   //This goes in the console


//TOPIC: Error Handler: keep this in last place
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(404).send("Page Not Found");
})   //This goes in the frontend 

app.listen(3000);