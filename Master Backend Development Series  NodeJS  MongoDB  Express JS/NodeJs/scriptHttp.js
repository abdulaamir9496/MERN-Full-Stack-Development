const http = require("http");

const server = http.createServer(function(req, res) {
    res.end("Welcome to the server")
});

server.listen(3000);