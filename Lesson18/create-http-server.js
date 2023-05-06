// import http library
const http = require('http');

// create a server object
const myserver = http.createServer((request, response) => {
    console.log('request received');
    //console.log('request URL=>',request.url);
    //console.log('request HEADERS=>',request.headers);
    // write response
    response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    response.write("Hello World <br/> This is my first <b>Node.js server</b> <h1>MERHABA DÜNYA!</h1>");
    response.write("<br/> Second response.write");
    response.end(); 
    //response.end("<b>From end Method</b>");
});


// listen on port 3000 == http://localhost:3000
myserver.listen(3000);