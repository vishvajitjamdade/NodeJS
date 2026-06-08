const http = require("http");
http.createServer(function(req,res){
    // console.log("Welcome To NodeJS");
    res.write("Welcome To NodeJS");
    res.write("Good Afternoon");
    res.end();
}).listen(5000);

//http:localhost:5000