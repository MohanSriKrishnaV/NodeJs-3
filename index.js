const fs = require("fs");
const http = require("http");
const server = http.createServer((req, res) => {
    fs.writeFile("index.html", "<h1> Hello World </h1> <p>my name is 10x student</p>",(err) => {
        console.log("done");
    })
    
    fs.readFile("index.html", (err, data) => {
        res.writeHead(200, { "Content-type": "text/html" });
        res.write(data);
        res.end();
    })
   
});

server.listen(3000, () => {
    console.log("server started");
})

