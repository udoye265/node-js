const http = require("http")

const server = http.createServer(function(req, res){
    res.end("<h1>Hello Node!!!!</h1>")
})

const port = 3000;
server.listen(port, ()=>{
    console.log(`Server listening on port ${port}`)
})
