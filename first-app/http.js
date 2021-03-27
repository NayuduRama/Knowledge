const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        // res.write('Hello World!');
        res.end('Hello World');
    }

    if (req.url === '/api/cources') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.listen(4000);
console.log("listening on port:3000");