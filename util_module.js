const util = require("util");

const content = "Hello %s, I am from %s";
const result = util.format(content,"Vishvajit","Pune");

console.log(result);

const os = require("os");

console.log(os.type());
console.log(os.platform());
console.log(os.totalmem()); //bytes
console.log(os.freemem());  //bytes
console.log(os.hostname());
console.log(os.userInfo());

const path = require("path");

console.log(path.resolve("util_module.js"));

console.log(path.join("home","dir1","dir2","dir3","dir4"));  //mostly used
console.log(path.normalize("home/dir1/../../dir4/demo.txt"));