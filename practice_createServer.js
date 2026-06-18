const http = require("http");

const server = http.createServer((req,res)=>{
    res.write("Welcome to the practice of node js");
    res.end();
});

server.listen(1000,()=>{
    console.log(`Server is running on PORT : 1000`);
});