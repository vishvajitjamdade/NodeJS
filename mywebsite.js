const http = require("http");
// const path = require("path");
const fs = require("fs");

http.createServer(function(req,res){
    fs.readFile("pages/home.html",function(error,data){
        if(error) throw error;
        res.writeHead(200,{"content-type":"text/html"});
        res.write(data);
        res.end();
    })
}).listen(5001);