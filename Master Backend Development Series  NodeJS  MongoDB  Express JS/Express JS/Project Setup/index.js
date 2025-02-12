const express = require('express');
const app = express();

//it will do us a parsers job for us.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//setting up our view engine: we can write below or above of parsers which is in above 2 lines of code.
app.set('view engine', 'ejs');


//setting up our routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, function(){
    console.log('listening on port 3000');
});