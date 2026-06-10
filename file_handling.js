const http = require("http");
const fs = require("fs");

http.createServer(function (req, res) {
    // fs.open("sample.txt","w",(error) => {
    //     if(error) throw error
    //     console.log("file created successfully");
    // })

    var content = "It was nice to meeting you!";

    fs.writeFile("sample.txt", content, (error) => {  //this erase entire previous data and add current data 
        if (error) throw error
        fs.readFile("sample.txt", (error, data) => { //here data --> buffer(large amount of data)
            if (error) throw error
            console.log(data.toString());
            let sentence = data.toString();
            let sentenceArr = sentence.split(" ");
            let countWords = sentenceArr.length;
            let countCharacter = 0;
            for (let word of sentenceArr) {
                countCharacter += word.length;
            }

            console.log(`Words Count : ${countWords} and Character count : ${countCharacter}`)
        })
        console.log("Done");
    })

    // fs.appendFile("sample.txt",content,(error) => {
    //     if(error) throw error
    //     console.log("Done");
    // })

    

    // content2 = `Words Count : ${countWords} and Character count : ${countCharacter}`;

    // fs.appendFile("sample.txt",content2,(error) => {
    //     if(error) throw error
    //     console.log("Done");
    // })

    // fs.rename("sample.txt", "newSampleFile.txt", (error) => {
    //     if(error) throw error
    //     console.log("File renamed successfully");
    // })

    // fs.unlink("newSampleFile.txt",(error) => {
    //     if(error) throw error
    //     console.log("File Deleted Successfully");
    // })

    res.end();
}).listen(5001);