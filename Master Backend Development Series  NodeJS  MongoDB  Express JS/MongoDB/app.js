const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Code for the world!');
});

app.listen(3000);