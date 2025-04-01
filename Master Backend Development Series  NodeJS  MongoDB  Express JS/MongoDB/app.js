const express = require('express');
const app = express();

//for performing CRUD operations
const User = require('./userModel');

app.use(express.json()); // To handle JSON requests

app.get('/', (req, res) => {
    res.send('Code for the world!');
});

//MongoDB code is asynchronous: said by mongoDB to make run code line by line we use async and await.
//It takes some time to connect to the database
//So, we use callbacks to handle the response
//If the connection is successful, the callback function is called with the response
//If the connection is unsuccessful, the callback function is called with the error
// Create User
app.get('/create', async (req, res) => {
    let createduser = await User.create({
        name: 'Aamir',
        email: 'aamir@example.com',
        userName: 'aamir123'  // Ensure consistent field name
    });
    res.send(createduser);
});

//We can read all the created users from the database
// Read Users
app.get('/read', async (req, res) => {
    let users = await User.find();     
    //find gives us array, & findOne gives us object, 
    // & findById gives us object by id, & 
    // findByIdAndDelete gives us object by id and delete it, & 
    // deleteMany gives us all the objects and delete them all, & 
    // findOneAndUpdate gives us object by id and update it, & 
    // findOneAndDelete gives us object by id and delete it, & 
    // findOneAndRemove gives us object by id and remove it, & 
    // updateMany gives us all the objects and update them all, & 
    // updateOne gives us one object and update it, & 
    res.send(users);
}); 

//We can also read a specific user from the database
// app.get('/read/:id', async (req, res) => {
//     let users = await userModel.findById(req.params.id);
//     res.send(user);
// });

// Update User
app.get('/update', async (req, res) => {
    let updatedUser = await User.findOneAndUpdate(
        {userName: "aamir123"}, 
        {name: "Muhammad"}, 
        {new: true}
    );
    res.send(updatedUser);
});

// Delete User
app.get('/delete', async (req, res) => {
    let deletedUser = await User.findOneAndDelete({userName: "aamir123"});
    res.send(deletedUser);
});

//We can delete a specific user from the database
// app.get('/delete/:id', async (req, res) => {
//     let users = await User.findByIdAndDelete(req.params.id);
//     res.send(users);
// });

//We can delete all the users from the database
// app.get('/deleteAll', async (req, res) => {
//     let users = await User.deleteMany();
//     res.send(users);
// });

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
