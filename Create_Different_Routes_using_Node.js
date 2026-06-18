const http = require("http");

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end("Home Page");
    }
    else if(req.url === "/about"){
        res.end("About Page");
    }
    else{
        res.end("404 page not found ");
    }
});

const PORT = 1000;

server.listen(PORT,()=>{
    console.log(`Server is running on port : ${PORT}`);
})