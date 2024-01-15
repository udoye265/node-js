// const http = require("http");


// const server = http.createServer(function(req, res){
//     res.writeHead(200,{
//         "Content-Type" : "Text/html"

//     });
//     res.end("<h1>Hello guys</h1> <h2>This is a backend class</h2>")
// });

// const port = 5000;

// server.listen(port, () => {
//     console.log(`Server listening on port ${port}`);
// });

// const eventEmitter = require("events");

// const myEmitter = new eventEmitter();

// myEmitter.on('sampleEvent', ()=>{
//     console.log("Data is being logged")
// })

// setTimeout(()=>{
//     myEmitter.emit("sampleEvent")
// }, 4000)
// setInterval(()=>{
//     myEmitter.emit("sampleEvent")
// }),4000