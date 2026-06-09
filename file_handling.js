const http = require("http");
const fs = require("fs");

http.createServer(function(req,res){
    // fs.open("sample.txt","w",(error) => {
    //     if(error) throw error
    //     console.log("file created successfully");
    // })

    // var content = "It was nice to meeting you!";

    // fs.writeFile("sample.txt",content,(error) => {  //this erase entire previous data and add current data 
    //     if(error) throw error
    //     console.log("Done");
    // })

    // fs.appendFile("sample.txt",content,(error) => {
    //     if(error) throw error
    //     console.log("Done");
    // })

    fs.readFile("sample.txt",(error,data) => { //here data --> buffer(large amount of data)
        if(error) throw error
        console.log(data.toString());
    })

    res.end();
}).listen(5001);