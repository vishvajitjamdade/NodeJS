const http = require("http");
const fs = require("fs");

http.createServer(function (req, res) {
    if (req.url === "/") {
        fs.readFile("pages/home.html", function (error, data) {
            if (error) throw error;
            res.writeHead(200, { "content-type": "text/html" });
            res.write(data);
            res.end();
        })
    }
    else if (req.url === "/about") {
        fs.readFile("pages/about.html", function (error, data) {
            if (error) throw error
            res.writeHead(200, { "content-type": "text/html" });
            res.write(data);
            res.end();
        })
    }
    else if (req.url === "/contact") {
        fs.readFile("pages/contact.html", function (error, data) {
            if (error) throw error;
            res.writeHead(200, { "content-type": "text/html" });
            res.write(data);
            res.end();
        })
    }
    else {
        fs.readFile("pages/pagenotfound.html", function (error, data) {
            if (error) throw error;
            res.writeHead(404, { "content-type": "text/html" });
            res.write(data);
            res.end();
        })
    }
}).listen(5001);