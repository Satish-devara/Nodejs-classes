const http = require('http');
const url = require('url');

let users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];


const server = http.createServer((req, res) => {
    if(req.url == "/users" && req.method == 'GET'){
        res.writeHead(200, {'Content-Type':'application/json'});
        res.end(JSON.stringify(users));
    }else if(req.url.startsWith('/users/') && req.method == 'GET'){

        let id = Number(req.url.split('/')[2]);
        let user = users.find(u => u.id === id);
        if(user){
             res.writeHead(200, {'Content-Type':'application/json'});
        res.end(JSON.stringify(user));
        }else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'User not found' }));
        }
       
    }else{
        res.writeHead(404, {'content-type': 'text/plain'});
        res.end('04 not found')
    }
});

server.listen(3000, () => console.log("server connected"));