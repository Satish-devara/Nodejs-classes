import { Socket } from 'dgram';
import net from 'net';

const server = net.createServer((socket) => {
    console.log('client connected');

    socket.on('data', chunk => {
        console.log('Received:', chunk.toString());
        socket.write('server recieved: ' + chunk);
    })
} )

server.listen(3000, () => {
    console.log('Server listening port 3000');
})