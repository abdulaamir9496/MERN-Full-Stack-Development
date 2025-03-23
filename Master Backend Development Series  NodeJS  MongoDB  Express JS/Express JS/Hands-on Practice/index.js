const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    fs.readdir(`./files`, function (err, files) {
        // console.log(files);
        res.render("index", {files: files});  //views page
    });
});

app.get('/file/:filename', (req, res) => {
    fs.readFile(`./files/${req.params.filename}`, 'utf-8', function(err, filedata) {  //Buffered data will pass through utf-8 to make it english readable format and then pass to callback middleware which is filedata variable.
        // console.log(filedata);
        res.render('show', {filename: req.params.filename, filedata: filedata});
    })
});

app.post('/create', (req, res) => {
    // console.log(req.body);
    //how to create a file
    fs.writeFile(`./files/${req.body.title.split(' ').join(' ')}.txt`, req.body.details, function(err) {
        res.redirect('/');
    });
});

app.delete('/delete/:filename', (req, res) => {
    // console.log(req.params.filename);
    fs.unlink(`./files/${req.params.filename}`, function(err) {
        res.redirect('/');
    });
});

app.listen(3000);