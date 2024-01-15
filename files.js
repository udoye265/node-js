const fs = require("fs")
fs.writeFileSync("welcome.txt","Hello node")
const data = fs.readFileSync("welcome.txt")
console.log(data.toString())