import fs from 'fs';
import path from 'path';
// const path = require('path');
// const { findIndex, chunk } = require('underscore');
// const zlib = require('zlib');
// const readline = require('readline')

//reading data from file
fs.readFile('test.txt','utf-8',(err, data) => {
    if(err) console.error(err);

    console.log(data);
});


// fs.readFile('test.txt', 'utf-8', (err, data1) => {
//     if (err) {
//         console.error(err);
//     } else {
//         fs.readFile('test1.txt', 'utf-8', (err, data2) => {
//             if (err) {
//                 console.error(err);
//             } else {
//                 fs.readFile('test2.txt', 'utf-8', (err, data3) => {
//                     if (err) {
//                         console.error(err);
//                     } else {
//                         console.log(data1);
//                         console.log(data2);
//                         console.log(data3);
//                     }
//                 })
//             }
//         })
//     }
// })


// writing data from file
// fs.writeFile('test.txt','adding data into the file','utf-8',(err) => {
//     if(err) console.error(err);

//     fs.readFile('test.txt','utf-8',(err, data) => {
//         if(err) console.log(err);
//         console.log(data);
//     })
//     console.log("entry done");
// })

//appending data from file
// fs.appendFile('test.txt','\ndata appended', (err) => {
//     if(err) console.error(err);

//     fs.readFile('test.txt','utf-8',(err, data) => {
//         if(err) console.error(err);
//         console.log(data);
//     })
// });


//deleting file
// fs.unlink('test1.txt', (err) => {
//     if(err) console.error(err);
//     console.log('deleted file');
// })

//rename file
// fs.rename('test.txt','file.txt', (err) => {
//     if(err) console.error(err);

//     console.log('file renamed');
// })

//file status
// fs.stat('file.txt',(err, stats) => {
//     if(err) console.error(err);

//     console.log(stats.isFile());
//     console.log(stats.size, "bites");
// })

//mkdir
// fs.mkdir('data', (err) => {
//     if(err) console.error(err);
//     console.log('directory created');
// })


// fs.rmdir('data', { recursive: true }, (err) =>{
//     if(err) console.error(err);
//     console.log('directory deleted');
// })

//readdirectory
// fs.readdir('data', (err, files) => {
//     console.error(err);
//     console.log(files);
// });

//updating data
// const user = {id: 3, name: 'satish'};

// fs.writeFile('file.txt', JSON.stringify(user, null, 2), (err) => {
//     if(err) console.log(err);
// })

// fs.readFile('file.txt', 'utf-8', (err, data) => {
//     if(err) console.error(err);
//     const dummydata = JSON.parse(data);
//     console.log(data);
// })

//miniPRoject

//  const dataPath = path.join(__dirname, 'file.txt');

//  function readUser(){
//     try{
//         const data = fs.readFileSync(dataPath, 'utf-8');
//         return JSON.parse(data);
//     }catch(err){
//         if(err.code == 'ENOENT') {
//             return [];
//         }else{
//             throw err;
//         }

//     }    
//  }

//  function writeUser(users){
//     fs.writeFileSync(dataPath, JSON.stringify(users, null, 2));
//     console.log("data written succesfully");
//  }

//  function addUser(id, name){
//     const users = readUser();

//     if(users.some(u => u.id === id )){
//          console.log("user is already existed");
//     };
   

//     users.push({id, name});
//     writeUser(users);
//     console.log("user added");
//  }

//  function searchUser(key){
//     const users = readUser();

//     const found = users.filter(u => {
//         if(u.id === key || u.name.toLowerCase() === String(key.toLowerCase())){
//             console.log(u);
//         }
//     })
//  };

// //  searchUser('Alice');

// function deleteUser(id){
//     const users = readUser();

//     const findIndex = users.findIndex(u => u.id === id);
//     const data = users.splice(findIndex,1)[0];

//     writeUser(users);
// }

// function UpdateIndex(id, newName){
//     const users = readUser();

//    const index =  users.findIndex(u => u.id === id);

//    users[index].name = newName;

//    writeUser(users);
// }

// function showDetails(){
//     const users = readUser();

//     users.forEach(u => {
//         console.log(`id : ${u.id} , name: ${u.name}`);
//     });
// }
// showDetails();
// addUser(3, 'satish');
// addUser(4, 'sai');
// searchUser('Alice');
// deleteUser(4);
// UpdateIndex(4, 'satish');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//     prompt: "UserName>"
// });

// console.log(`Welcome to User Manager CLI!
// Available commands:
// - add <id> <name>
// - delete <id>
// - update <id> <new name>
// - search <id|name>
// - show
// - exit
// `)


// rl.prompt();

// rl.on('line', (line) => {
//     const  input = line.trim();
//     const [command, ...args] = input.split(' ');
    
//     switch(command.toLowerCase()){
//         case 'add':
//             const [addId, ...addArgs] = args;
//             addUser(Number(addId), addArgs.join(' '));
//             break;
//         case 'delete':
//             const id = args[0];
//             deleteUser(Number(id));
//             break;
//         case 'search':
//             search(args.join(' '));
//             break;
//         case 'update':
//             const[updateId, ...updateName] = args;
//             UpdateIndex(Number(updateId),updateName.join(' '));
//             break;
//         case 'show':
//             showDetails();
//             break;
//         case 'exit':
//             console.log("exiting prompt");
//             rl.close();
//             break;

//         default:
//             console.log("wrong command");
//     }

//     rl.prompt();
// });

// rl.on('close', () => {
//     console.log("exiting process");
//     process.exit(0);
// })

// const readStream = fs.createReadStream('output.txt.deflate');

// readStream.on('data', chunk => {
//     console.log(chunk);
// } )

// readStream.on('error', err => {
//     console.error(err);
// })

// readStream.on('end', () => {
//     console.log('data has been read');
// })

// const writeStream = fs.createWriteStream('data.txt');

// writeStream.write('hello ');
// writeStream.write('morning');
// writeStream.end('\ngoodbye');

// writeStream.on('finish', () => {
//     console.log('finished the writing');
// })

// writeStream.on('error', err => {
//     console.log(err);
// })

// readStream.pipe(writeStream);

// writeStream.on('finish', () => {
//     console.log('finished');
// })

// const deflate = zlib.createDeflate();
// const inflate = zlib.createInflate();

// readStream.pipe(deflate).pipe(writeStream).on('finish' ,() => {console.log('finished')});
// readStream.pipe(inflate).pipe(writeStream).on('finish' , () => { console.log('finished')});









