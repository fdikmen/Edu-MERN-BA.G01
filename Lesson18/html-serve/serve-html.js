// for create server
const http = require('http');
// for read file
const fs = require('fs');


// create a server object
const myserver = http.createServer((req, res) => {
    console.log('request was made: ' + req.url);

    res.writeHead(200, { 'Content-Type': 'text/html' });

    // read file
    fs.readFile('index.html', (err, data) => {
        if (err) throw err;
        res.end(data);
    });
        
    //res.end('Hey ninjas');
   
});

// listen for request on port 3000, and as a callback function have the port listened on logged
myserver.listen(3000);