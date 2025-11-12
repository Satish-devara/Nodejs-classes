import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        fs.readFile('index.html', (err, data) => {
            if(err){
                res.writeHead(500);
                res.end('Error loading html file');
            }else{
                res.writeHead(200, {'Content-Type' : 'text/html'});
                res.end(data);
            }
        });
    }else{
        res.writeHead(400, {'Content-Type' : 'application/json'});
        res.end('404 not found')
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
})
