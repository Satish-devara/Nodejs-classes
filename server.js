import net from 'net';

const server = net.createServer((socket) => {
    console.log('server connected 🟢');

    socket.write('welcome to TCP server! \n');

    socket.on('data', (data) => {
        console.log('Client: ', data.toString().trim());
        socket.write(`server received ${data}`);
    })

    socket.on('end', () => {
        console.log('🔴 Client disconnected.')
    });
});

server.listen(4000, '127.0.0.1',() => {
    console.log('🚀 TCP Server running on port 4000');
})