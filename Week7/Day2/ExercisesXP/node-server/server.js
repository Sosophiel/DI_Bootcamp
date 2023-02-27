

 const user = {
    firstname: 'John',
    lastname: 'Doe'
}

const http = require('http');

const server = http.createServer( (request, response) => {
    console.log('I am listening....');
    response.end(JSON.stringify(user))
 });
 server.listen(8080);