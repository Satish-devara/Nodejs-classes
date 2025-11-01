import fs, { read, readlink } from 'fs';
import readLine  from 'readline/promises';

// fs.readFile('file.txt','utf-8',(err, data) => {
//     if(err){
//         console.error(err);
//     }

//     console.log(data);
// })

// fs.writeFile('file.txt','hello Node.js', (err) => {
//     if(err) {
//         console.log('error writing file: ', err);
//     }

    

//     console.log('file written succesfully');
   
// })

// fs.appendFile('file.txt','\nfile added and edited',(err) => {
//     if(err){
//         console.error(err);
//     }

//     console.log('file appended');
// })

// fs.unlink('file1.txt', (err) => {
//     if(err){
//         console.error(err);
//     }

//     console.log('file deleted');
// })

// fs.rename('file.txt', 'file1.txt', (err) => {
//     if(err){
//         console.error(err);
//     }

//     console.log('file renamed');
// })

// if(fs.existsSync('file1.txt')){
//     console.log('file exists');
// }else{
//     console.log('file not exists');
// }

const readStream = fs.createReadStream('data.txt', 'utf-8');

// readStream.on('data', chunk => {
//     console.log(chunk);
// })

// readStream.on('end', () => {
//     console.log('finished reading file')
// })


const writeStream = fs.createWriteStream('write.txt', {encoding:'utf-8'});


writeStream.on('finish', () => {
    console.log('finised to write');
})

const rl = readLine.createInterface({
    input:process.stdin,
    output: process.stdout,
    prompt:'enter line'
})

rl.prompt();

rl.on('line', (line) => {
    if(line.trim().toLowerCase() === 'end'){
        rl.close()
    }else{
        writeStream.write(line + '\n');
        rl.prompt();
    }
});

rl.on('close', () => {
    writeStream.end();
})


// readStream.pipe(writeStream);

