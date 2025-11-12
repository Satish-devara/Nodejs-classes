import http from 'http';

const server = http.createServer((req, res) => {
    if(req.method === 'POST' && req.url === '/data'){
        let body = ' ';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            res.writeHead(200, {'Content-Type' : 'application/json'});
            res.end(JSON.stringify({message: "Data received", data: body}));
        });
    }else{
            res.write(404, {'Content-Type' : 'text/plain'} );
            res.end('Not found');
    }
});

server.listen(5000, () => console.log('Server running at http://localhost:5000/'))