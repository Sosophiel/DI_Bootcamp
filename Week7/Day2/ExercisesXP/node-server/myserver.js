const http = require('http');

const server = http.createServer( (request, response) => {
    console.log('I am listening....');
    response.setHeader('Content-Type', 'text/html')
    response.end(`<h1>This is my first response</h1> <h1>This is my second response</h1> <h2>This is my third response</h2>`)
 });
 server.listen(3000);