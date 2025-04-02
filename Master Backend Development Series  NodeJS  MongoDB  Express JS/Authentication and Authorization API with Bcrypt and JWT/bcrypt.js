const bcrypt = require('bcrypt');
const express = require('express');
const app = express();

// app.get('/', (req, res)=>{
//     bcrypt.genSalt(saltRounds, function(err, salt) {
//         bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
//             // Store hash in your password DB.
//         });
//     });
// });

app.get('/', () => {
    bcrypt.genSalt(10, function(err, salt) {
        if (err) {
            console.error('Error generating salt:', err);
            return;
        }
        console.log('Generated salt:', salt);
        
        // Example of hashing a password: encrpting the password
        bcrypt.hash("wonderString", salt, function(err, hash) {
            if (err) { 
                console.error('Error hashing password:', err);
                return;
            }
            console.log('Generated hash:', hash);
        });
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

