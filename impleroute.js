import http from 'http';

const server = http.createServer((req, res) => {
    if(req.url === '/' && req.method === 'GET'){
        res.end('welcome to home page');
    }else if(req.url === '/about' && req.method === 'GET'){
        res.end('About Page');
    }else{
        res.statusCode = 404;
        res.end('Page not found');
    }
})

server.listen(3000, () => {
    console.log("server is running");
})