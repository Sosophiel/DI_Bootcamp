const {largeNumber, getDateTime } = require('./main.js')

const b = 5

console.log(largeNumber + b)


const http = require('http');

const server = http.createServer( (request, response) => {
    console.log('I am listening....');
    response.setHeader('Content-Type', 'text/html')
    response.end(`<p>My module is ${largeNumber + b}</p><h1>Hi there at the frontend</h1><p>${getDateTime()}</p>`)
 });
 server.listen(3000);