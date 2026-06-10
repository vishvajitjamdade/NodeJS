const util = require("util");

const content = "Hello %s, I am from %s";
const result = util.format(content,"Vishvajit","Pune");

console.log(result);