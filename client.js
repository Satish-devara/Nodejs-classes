import { read } from 'fs';
import net from 'net';
import { stdin } from 'process';
import readline from 'readline/promises';

const client = new net.Socket();

client.connect(4000, '127.0.0.1', () => {
  console.log('✅ Connected to server.');
});

client.on('data', (data) => {
    console.log('Server:', data.toString().trim());
});

client.on('close', () => {
    console.log('❌ Disconnected from server.');

});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt:'you: '
});

rl.prompt();

rl.on('line', (line) => {
    if(line.trim().toLowerCase() === 'end'){
        client.end();
        rl.close();
    }else{
        client.write(line);
        rl.prompt();
    }
});