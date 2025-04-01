const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/mongopractice");

//Schema for the user model, which is the blueprint of the user object that will be stored in the database
// Define User Schema
const userSchema = mongoose.Schema({
    name: String,
    userName: String,   // Ensure correct spelling (capital "N")
    email: String
});

//Model for the user schema that will be used to interact with the database collection of users 
//On the basis of Model we do CRUD operations
// Create and Export User Model
module.exports = mongoose.model("User", userSchema);

//Exporting the mongoose object so that it can be used in other files
// module.exports = mongoose;
// module.exports = mongoose.model('user', userSchema);

// mongoose.mongoURI = 'mongodb://localhost:27017/CodeForTheWorld';
