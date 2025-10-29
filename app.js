// console.log("message dislayed")
// console.log("practicing Nodejs")
// console.log("Practice JS")

// function display(){
//         console.log("displaying function by calling the function")
// }

// display();

// function promise(){
//     console.log("Promise has been executed");
// }

// promise();

// import chalk from "chalk";
// import { read } from "fs";
// import promptSync from 'prompt-sync';
// import readLine from 'readline/promises';
// console.log(chalk.green("hello from chalk"));
// console.log(chalk.blue.bold("hello from chalk"));

// const prompt = promptSync();
// const a = Number(prompt("enter your number: "));
// const b = Number(prompt("enter your number: "));

// const rl = readLine.createInterface({
//     input : process.stdin,
//     output: process.stdout
// })

// const a = await rl.question( console.log("enter your number"));
// const b = await rl.question( console.log("enter your number"));

// console.log(chalk.bgGreen.yellow(`${a + b}`));
// console.log(chalk.bgGreen.yellow(a-b));
// console.log(chalk.bgGreen.yellow(a*b));
// console.log(chalk.bgGreen.yellow(a/b));
// rl.close();
import EventEmitter from 'events';

const eventEmmiter = new EventEmitter()


eventEmmiter.on('greetings', () =>{
    console.log("event had been emitted");
})

eventEmmiter.emit('greetings');